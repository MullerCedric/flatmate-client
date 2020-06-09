<template>
  <fm-screen :toolbarProps="toolbarProps">
    <form @submit.prevent>
      <fm-form-group>
        <fm-form-input label="Intitulé" :required="true" fi-name="label" :disabled="isSending"
                       placeholder="Nettoyer la cuisine" @change-value="formData.label = $event">
        </fm-form-input>
        <fm-form-input label="Date et heure de début" :required="true" placeholder="aaaa-mm-jjThh:mm"
                       fi-name="start_date" input-type="datetime-local" :default-value="selectedDate"
                       @change-value="formData.start_date = $event" :disabled="isSending">
        </fm-form-input>
      </fm-form-group>

      <fm-form-group>
        <fm-form-input label="Partager avec la colocation" fi-name="shared" input-type="toggle"
                       :default-value="true" @change-value="formData.shared = $event" :disabled="isSending">
          <template #tips>
            Désélectionnez cette option pour rendre l'événement privé
          </template>
        </fm-form-input>
        <fm-form-input v-if="formData.shared" input-type="checkbox" label="Participants" fi-name="participants"
                       @change-value="formData.participants = $event" :inputs="flatUsers" :disabled="isSending">
        </fm-form-input>
      </fm-form-group>

      <fm-form-group>
        <fm-form-input input-type="select" label="Catégorie" fi-name="category"
                       @change-value="formData.category = $event" :disabled="isSending">
          <template #options>
            <option value="">Aucune</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.label }}</option>
          </template>
        </fm-form-input>
      </fm-form-group>

      <fm-form-group>
        <fm-form-input label="Demander une confirmation" fi-name="confirm" input-type="toggle"
                       @change-value="formData.confirm = $event" :disabled="isSending">
          <template #tips>
            Utile pour savoir qui participera ou qui a fait ce qui lui était assigné
          </template>
        </fm-form-input>
        <fm-form-input v-if="formData.confirm" label="Type de confirmation" input-type="radio"
                       fi-name="confirm-type" @change-value="formData.confirmType = $event" :inputs="[
          { label: 'Avant le début de l\'événement', id: 'before' },
          { label: 'Au moment de l\'événement', id: 'during' },
      ]" :disabled="isSending">
        </fm-form-input>
      </fm-form-group>

      <fm-form-group>
        <fm-form-input label="Récurrent" input-type="toggle" fi-name="recurring"
                       @change-value="formData.recurring = $event" :disabled="isSending">
        </fm-form-input>
        <fm-form-input v-if="formData.recurring" input-type="number" label="Nombre de jours entre chaque répétition"
                       fi-name="interval" @change-value="formData.interval = $event" :disabled="isSending">
        </fm-form-input>
        <fm-form-input v-if="formData.recurring" label="Date de fin de répétition" fi-name="end_date"
                       placeholder="aaaa-mm-jjThh:mm"
                       input-type="datetime-local" :default-value="selectedDate"
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
          Ajouter l'événement
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
                    showAvatar: false,
                    title: 'Ajouter un événement',
                    type: 'events',
                    showMore: true,
                },
                selectedDate: this.$route.query.selectedDate,

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
                        'color': el.color,
                        'label': el.id === this.currUser.id ? el.name + ' (moi)' : el.name,
                        'checked': (el.id === this.currUser.id),
                        'id': el.id
                    };
                }) : [];
            },
            categories() {
                return this.$store.getters[types.GET_EVENTS_CATS];
            },
        },
        mounted() {
            this.$store.dispatch(types.FETCH_EVENTS_CATS);
        },
        methods: {
            sendForm() {
                if (this.isSending) return;
                this.isSending = true;
                this.$store.dispatch(types.SAVE_EVENT, this.formData)
                    .then(() => {
                        this.isSending = false;
                        this.$router.push({name: 'eventsCalendar'});
                    });
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
