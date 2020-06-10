<template>
  <fm-screen v-if="event" :toolbarProps="toolbarProps" class="sc-events-show">
    <section>
      <h2 class="sc-events-show__label">
        {{ event.label }}
      </h2>
      <div>
        Confirmez votre participation !
      </div>
      <div class="sc-events-show__section-content">
        <ic-clock class="sc-events-show__section-icon">
        </ic-clock>
        <div class="sc-events-show__section-val">
          <div>du {{ displayEventDate }} à {{ displayEventTime }}</div>
          <div>au {{ displayEventDate }} à {{ displayEventEndTime }}</div>
        </div>
      </div>
    </section>
    <div>
      <section v-if="event.flat_id">
        <h2>
          Participants
        </h2>
        <div class="sc-events-show__section-content">
          <ic-person class="sc-events-show__section-icon">
          </ic-person>
          <div class="sc-events-show__section-val">
            <span v-for="(user, index) in event.participants" :key="user.id">
              {{ user.name }}{{ index + 1 !== event.participants.length ? ', ': '' }}
            </span>
          </div>
        </div>
        <div class="sc-events-show__side-note">
          Cet événement est visible par l'ensemble de la colocation
        </div>
      </section>
      <div v-if="!event.flat_id" class="sc-events-show__side-note">
        Cet événement n'est visible que par vous
      </div>
    </div>
    <section>
      <h2>
        Catégorie
      </h2>
      <div class="sc-events-show__section-content">
        <ic-bookmark :inside-color="category_color" class="sc-events-show__section-icon">
        </ic-bookmark>
        <div class="sc-events-show__section-val">{{ event.category_id ? event.category.label : 'Aucune' }}</div>
      </div>
    </section>
    <section v-if="event.interval">
      <h2>Répétitions</h2>
      <div class="sc-events-show__section-content">
        <ic-repeat class="sc-events-show__section-icon">
        </ic-repeat>
        <div class="sc-events-show__section-val">
          Se répète tous les {{ event.interval / 86400000 }} jours depuis le {{ displayEventStartDate }}
          <span v-if="event.end_date"> jusqu'au {{ displayEventEndDate }}</span>
        </div>
      </div>
    </section>

    <template #tab>
      <fm-bottom-bar>
        <div class="fm-ic-btn" @click="handleDelete">
          <ic-bin :width="20" :height="20" class="fm-ic-btn__icon">
          </ic-bin>
          Supprimer
        </div>
        <router-link tag="div" class="fm-ic-btn"
                     :to="{name: 'eventsEdit', params: {id:event.id}, query: { selectedDate } }">
          <ic-edit :width="20" :height="20" class="fm-ic-btn__icon">
          </ic-edit>
          Modifier
        </router-link>
      </fm-bottom-bar>
    </template>
  </fm-screen>
</template>

<script>
    import * as types from "../../store/types";
    import moment from 'moment';

    import FmScreen from "../../components/FmScreen";
    import IcPerson from "../../components/icons/IcPerson";
    import IcBookmark from "../../components/icons/IcBookmark";
    import IcRepeat from "../../components/icons/IcRepeat";
    import IcClock from "../../components/icons/IcClock";
    import FmBottomBar from "../../components/FmBottomBar";
    import IcEdit from "../../components/icons/IcEdit";
    import IcBin from "../../components/icons/IcBin";

    moment.locale('fr');

    export default {
        name: "ScEventsShow",
        components: {IcBin, IcEdit, FmBottomBar, IcClock, IcRepeat, IcBookmark, IcPerson, FmScreen},
        data() {
            return {
                toolbarProps: {
                    showBack: true,
                    showAvatar: false,
                    title: 'Détails',
                    type: 'events',
                },
                selectedDate: this.$route.query.selectedDate,
            }
        },
        computed: {
            currUser() {
                return this.$store.getters[types.GET_USER];
            },
            event() {
                return this.$store.getters[types.GET_EVENT](this.$route.params.id);
            },
            eventDate() {
                return moment(this.selectedDate).hours(this.event.start_date.getHours()).minutes(this.event.start_date.getMinutes());
            },
            eventEndDate() {
                return moment(this.event.end_date.toISOString());
            },
            eventStartDate() {
                return moment(this.event.start_date.toISOString());
            },
            displayEventDate() {
                return this.eventDate.format('L');
            },
            displayEventTime() {
                return this.eventDate.format('LT');
            },
            displayEventEndTime() {
                return moment(this.eventDate).add(this.event.duration, 'ms').format('LT');
            },
            displayEventEndDate() {
                return this.eventEndDate.format('L');
            },
            displayEventStartDate() {
                return this.eventStartDate.format('L');
            },
            category_color() {
                let cat = this.event.category;
                if (!cat) return 'none';
                return cat.color;
            },
        },
        methods: {
            handleDelete() {
                if (window.confirm('Êtes-vous vraiment sûr de supprimer cet événement ? Cette action est définitive')) {
                    this.$store.dispatch(types.DELETE_EVENT, this.event.id)
                        .then(() => {
                            this.$router.push({name: 'eventsCalendar'});
                        });
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .sc-events-show {
    &__label {
      font-size: 1.25rem;
      font-weight: $bold;
      color: $black;
      margin: 0 0 .125rem;
    }

    &__section {
      &-content {
        display: flex;
      }

      &-icon {
        flex-shrink: 0;
        margin-right: .5rem;
      }

      &-val {
        flex: 1;
      }
    }

    &__side-note {
      font-size: .875rem;
      margin-top: .5rem;
      line-height: 1.25;
    }
  }

  .fm-ic-btn {
    display: flex;
    align-items: center;
    padding: .875rem;

    &__icon {
      margin-right: .375rem;
    }
  }
</style>
