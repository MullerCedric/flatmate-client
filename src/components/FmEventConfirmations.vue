<template>
  <div>
    <fm-alert v-if="promptToShow === 'before'" @button-clicked="sendConfirm"
              :buttons="[{value: 'refuse', label: 'Non'}, {value: 'accept', label: 'Oui', type: 'primary'}]">
      Participerez-vous à cet événement ?
    </fm-alert>
    <fm-alert v-if="promptToShow === 'during'" @button-clicked="sendConfirm"
              :buttons="[{value: 'refuse', label: 'Non'}, {value: 'accept', label: 'Oui', type: 'primary'}]">
      Avez-vous participé à cet événement ?
    </fm-alert>

    <div v-if="areNotVisible">Une confirmation sera demandée au moment de l'événement</div>
    <fm-expandable v-if="!areNotVisible && (eventConfirmType === 'during' || eventConfirmType === 'before')"
                   :show-strip="true" tag="div" title="Confirmations de participations">
      <template v-if="confirmations.length >= 1">
        <div v-for="confirmation in confirmations" :key="confirmation.pivot.id"
             :class="['fm-event-confirmations__entry']">
          <fm-avatar :user-name="confirmation.name" :img-url="confirmation.avatar" size="xs"
                     class="fm-event-confirmations__avatar">
          </fm-avatar>
          <template v-if="confirmation.id === userId">
            <span class="bold">Vous</span>
          </template>
          <template v-else>
            {{ confirmation.name }}
          </template>
          <template v-if="confirmation.pivot.is_accepted === '1'">
            {{ confirmation.id === userId ? ' avez confirmé votre participation' : ' a confirmé sa participation' }}
          </template>
          <template v-else>
            {{ confirmation.id === userId ? ' avez ' : ' a ' }}
            indiqué ne pas participer
          </template>

          le {{ formatDate(confirmation.pivot.created_at) }}
        </div>
      </template>
      <template v-else>
        <div class="fm-event-confirmations__entry fm-event-confirmations__entry--none">
          Aucune confirmation n'a été envoyée
        </div>
      </template>
      <template v-if="promptToShow === 'before' || promptToShow === 'during'">
        <div class="fm-event-confirmations__entry fm-event-confirmations__entry--new">
          Confirmez si
          <span @click="sendConfirm('accept')" class="fm-event-confirmations__link">
            oui
          </span>
          ou
          <span @click="sendConfirm('refuse')" class="fm-event-confirmations__link">
            non
          </span>
          vous {{ eventConfirmType === 'during' ? 'avez participé' : 'participerez' }} à cet événement
        </div>
      </template>
      <template v-else>
        <div v-if="!hasAlreadySent && isAParticipant"
             class="fm-event-confirmations__entry fm-event-confirmations__entry--closed">
          Il n'est {{ eventConfirmType === 'during' ? 'pas encore' : 'plus' }} possible d'envoyer une confirmation pour
          cet événement
        </div>
      </template>
    </fm-expandable>
  </div>
</template>

<script>
    import moment from 'moment';
    import * as types from "../store/types";

    import FmExpandable from "./FmExpandable";
    import FmAlert from "./FmAlert";
    import FmAvatar from "./FmAvatar";

    moment.locale('fr');

    export default {
        name: "FmEventConfirmations",
        components: {FmAvatar, FmAlert, FmExpandable},
        props: {
            userId: {
                type: Number,
                required: true,
            },
            eventId: {
                type: Number,
                required: true,
            },
            eventDate: {
                type: String,
                required: true,
            },
            eventConfirmType: {
                type: String,
                default: '',
            },
            eventParticipants: {
                type: Array,
                default: () => {
                    return [];
                },
            },
        },
        data() {
            return {
                confirmationsAreLoaded: false,
                isSending: false,
            };
        },
        computed: {
            momentDate() {
                return moment.utc(this.eventDate);
            },
            dateFormat() {
                return this.momentDate.format('YYYY-MM-DD HH:mm:ss');
            },
            confirmations() {
                return this.$store.getters[types.GET_CONFIRMATIONS](this.dateFormat);
            },
            hasPassed() {
                return moment().isSameOrAfter(this.momentDate, 'hour');
            },
            areNotVisible() {
                return this.eventConfirmType === 'during' && !this.hasPassed;
            },
            isAParticipant() {
                return !!this.eventParticipants.find((user) => user.id === this.userId);
            },
            promptToShow() {
                if (!this.confirmations || !this.confirmationsAreLoaded) return 'none';
                if (!this.isAParticipant) return 'none';
                if (this.eventConfirmType === 'before' && !this.hasAlreadySent
                    && moment().isBefore(this.momentDate)) {
                    return 'before';
                }
                if (this.eventConfirmType === 'during' && !this.hasAlreadySent &&
                    this.hasPassed) {
                    return 'during';
                }
                return 'none';
            },
            hasAlreadySent() {
                return !!this.confirmations.find(el => el.id === this.userId);
            },
        },
        mounted() {
            this.$store.dispatch(types.FETCH_CONFIRMATIONS, {
                event_id: this.eventId,
                event_repeat_instance: this.eventDate,
            }).then(() => this.confirmationsAreLoaded = true);
        },
        methods: {
            sendConfirm(acceptStatus = 'accept') {
                if (this.isSending) return;
                this.isSending = true;
                this.$store.dispatch(types.SAVE_CONFIRMATION, {
                    event_id: this.eventId,
                    is_accepted: acceptStatus === 'accept',
                    event_repeat_instance: this.eventDate,
                }).then(() => {
                    this.isSending = false;
                });
            },
            formatDate(dateString) {
                return moment(dateString).format('L [à] LT');
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-event-confirmations {
    &__link {
      font-weight: $medium;
      color: $main;
    }

    &__entry {
      &:nth-child(n + 2) {
        padding: .5rem 0 0;
      }
    }

    &__avatar {
      display: inline-block;
      vertical-align: bottom;
    }
  }

  .bold {
    font-weight: $medium;
  }
</style>
