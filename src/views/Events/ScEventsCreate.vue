<template>
  <fm-screen :toolbarProps="toolbarProps">
    <form @submit.prevent>
      <fm-form-group>
        <fm-form-input label="Intitulé" :required="true" fi-name="label" :disabled="isSending"
                       :default-value="eventLabel"
                       placeholder="Nettoyer la cuisine" @change-value="formData.label = $event">
        </fm-form-input>
        <fm-form-input label="Date et heure de début" :required="true" placeholder="aaaa-mm-jjThh:mm"
                       fi-name="start_date" input-type="datetime-local" :default-value="eventStartDate"
                       @change-value="formData.start_date = $event" :disabled="isSending">
        </fm-form-input>
      </fm-form-group>

      <fm-form-group>
        <fm-form-input label="Partager avec la colocation" fi-name="shared" input-type="toggle"
                       :default-value="eventShared" @change-value="formData.shared = $event" :disabled="isSending">
          <template #tips>
            Désélectionnez cette option pour rendre l'événement privé
          </template>
        </fm-form-input>
        <fm-form-input v-if="formData.shared" input-type="checkbox" label="Participants" fi-name="participants"
                       @change-value="formData.participants = $event" :inputs="flatUsers" :disabled="isSending">
        </fm-form-input>
      </fm-form-group>

      <fm-form-group>
        <fm-form-input input-type="select" label="Catégorie" fi-name="category" :default-value="eventCat"
                       @change-value="formData.category = $event" :disabled="isSending">
          <template #options>
            <option value="">Aucune</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.label }}</option>
          </template>
        </fm-form-input>
      </fm-form-group>

      <fm-form-group>
        <fm-form-input label="Demander une confirmation" fi-name="confirm" input-type="toggle"
                       :default-value="!!eventConfirm"
                       @change-value="formData.confirm = $event" :disabled="isSending">
          <template #tips>
            Utile pour savoir qui participera ou qui a fait ce qui lui était assigné
          </template>
        </fm-form-input>
        <fm-form-input v-if="formData.confirm" label="Type de confirmation" input-type="radio"
                       :default-value="eventConfirm"
                       fi-name="confirm-type" @change-value="formData.confirmType = $event" :inputs="[
          { label: 'Avant le début de l\'événement', id: 'before' },
          { label: 'Au moment de l\'événement', id: 'during' },
      ]" :disabled="isSending">
        </fm-form-input>
      </fm-form-group>

      <fm-form-group>
        <fm-form-input label="Récurrent" input-type="toggle" fi-name="recurring" :default-value="eventRecurring"
                       @change-value="formData.recurring = $event" :disabled="isSending">
        </fm-form-input>
        <fm-form-input v-if="formData.recurring" input-type="number" label="Nombre de jours entre chaque répétition"
                       fi-name="interval" @change-value="formData.interval = $event" :disabled="isSending"
                       :default-value="eventRecurring ? eventInterval : 7">
        </fm-form-input>
        <fm-form-input v-if="formData.recurring" label="Date de fin de répétition" fi-name="end_date"
                       placeholder="aaaa-mm-jjThh:mm"
                       input-type="datetime-local" :default-value="eventEndDate"
                       @change-value="formData.end_date = $event" :disabled="isSending">
          <template #tips>
            Laissez vide pour que l'événement se répète indéfiniment (ou jusqu'à la modification de celui-ci)
          </template>
        </fm-form-input>
        <!--<fm-form-input v-if="formData.shared && formData.participants.length >= 2 && formData.recurring"
                       label="Faire une tournante" fi-name="turn" input-type="toggle"
                       :default-value="false" @change-value="formData.turn = $event">
        </fm-form-input>-->
      </fm-form-group>
    </form>

    <template #tab>
      <fm-bottom-bar>
        <div class="fm-ic-btn" @click="sendForm">
          <component :is="isSending ? 'ic-loading' : 'ic-checkmark'" width="20" height="20" class="fm-ic-btn__icon">
          </component>
          {{ $route.params.id ? 'Modifier l\'événement' : 'Ajouter l\'événement'}}
        </div>
      </fm-bottom-bar>
    </template>
  </fm-screen>
</template>

<script>
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmFormInput from "../../components/form/FmFormInput";
    import FmFormGroup from "../../components/form/FmFormGroup";
    import FmBottomBar from "../../components/FmBottomBar";
    import IcLoading from "../../components/icons/IcLoading";
    import IcCheckmark from "../../components/icons/IcCheckmark";

    export default {
        name: "ScEventsCreate",
        components: {IcCheckmark, IcLoading, FmBottomBar, FmFormGroup, FmFormInput, FmScreen},
        data() {
            return {
                toolbarProps: {
                    showBack: true,
                    title: 'Ajouter un événement',
                    showMore: true,
                },

                formData: {
                    label: '',
                    start_date: '',
                    shared: false,
                    participants: [],
                    turn: false,
                    category: '',
                    confirm: false,
                    confirmType: '',
                    recurring: false,
                    interval: '',
                    end_date: '',
                },
                isSending: false,
            }
        },
        computed: {
            currUser() {
                return this.$store.getters[types.GET_USER];
            },
            flatUsers() {
                return this.$store.getters[types.GET_FLAT_USERS].length ? this.$store.getters[types.GET_FLAT_USERS].map((el) => {
                    return {
                        'avatar': el.avatar,
                        'userName': el.name,
                        'color': el.color,
                        'label': el.id === this.currUser.id ? el.name + ' (moi)' : el.name,
                        'checked': (el.id === this.currUser.id || (this.event.participants && this.event.participants.find((user) => user.id === el.id))),
                        'id': el.id
                    };
                }) : [];
            },
            categories() {
                return this.$store.getters[types.GET_EVENTS_CATS];
            },
            event() {
                if (this.$route.name === 'eventsEdit') {
                    return this.$store.getters[types.GET_EVENT](this.$route.params.id);
                } else {
                    return {};
                }
            },
            eventLabel() {
                return this.event.label || '';
            },
            eventStartDateString() {
                if (!this.event.hasOwnProperty('start_date')) return false;
                return new Date(this.event.start_date.getTime() - (this.event.start_date.getTimezoneOffset() * 60000)).toISOString().slice(0, 16);
            },
            eventStartDate() {
                return this.eventStartDateString || this.$route.query.selectedDate || '';
            },
            eventShared() {
                return this.event.hasOwnProperty('flat_id') ? !!this.event.flat_id : true;
            },
            eventCat() {
                return this.event.categories ? this.event.categories[0].id || '' : '';
            },
            eventConfirm() {
                return this.event.confirm || '';
            },
            eventInterval() {
                return this.event.interval ? this.event.interval / 86400000 : 0;
            },
            eventRecurring() {
                return this.eventInterval >= 1;
            },
            eventEndDateString() {
                if (!this.event.end_date) return false;
                return this.dateWithOffset(this.event.end_date).toISOString().slice(0, 16);
            },
            eventEndDate() {
                let date = new Date(this.$route.query.selectedDate);
                date.setDate(date.getDate() + 7);
                date = this.dateWithOffset(date);
                return this.event.hasOwnProperty('end_date') ? this.eventEndDateString || '' : date.toISOString().slice(0, 16) || '';
            },
        },
        mounted() {
            this.$store.dispatch(types.FETCH_EVENTS_CATS);
        },
        methods: {
            sendForm() {
                if (this.isSending) return;
                this.isSending = true;
                if (this.event.hasOwnProperty('id')) {
                    this.formData.id = this.event.id;
                }
                this.$store.dispatch(types.SAVE_EVENT, this.formData)
                    .then(() => {
                        this.isSending = false;
                        this.$router.push({name: 'eventsCalendar'});
                    });
            },
            dateWithOffset(date) {
                return new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
            }
        },
    }
</script>

<style lang="scss" scoped>
  .fm-ic-btn {
    display: flex;
    align-items: center;
    padding: .875rem;

    &__icon {
      margin-right: .375rem;
    }
  }
</style>
