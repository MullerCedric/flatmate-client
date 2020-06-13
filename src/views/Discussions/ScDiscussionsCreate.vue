<template>
  <fm-screen :toolbarProps="toolbarProps">
    <form @submit.prevent>
      <fm-form-input label="Intitulé" fi-name="label" :disabled="isSending"
                     placeholder="Fiesta à la casa" @change-value="formData.label = $event">
      </fm-form-input>
      <fm-form-input input-type="checkbox" label="Participants" fi-name="participants" :disabled="isSending"
                     @change-value="formData.participants = $event" :inputs="flatUsers">
      </fm-form-input>
    </form>

    <template #tab>
      <fm-bottom-bar>
        <div class="fm-ic-btn" @click="sendForm">
          <component :is="isSending ? 'ic-loading' : 'ic-checkmark'" width="20" height="20" class="fm-ic-btn__icon">
          </component>
          Créer la discussion
        </div>
      </fm-bottom-bar>
    </template>
  </fm-screen>
</template>

<script>
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmFormInput from "../../components/form/FmFormInput";
    import FmBottomBar from "../../components/FmBottomBar";
    import IcLoading from "../../components/icons/IcLoading";
    import IcCheckmark from "../../components/icons/IcCheckmark";

    export default {
        name: "ScDiscussionsCreate",
        components: {IcCheckmark, IcLoading, FmBottomBar, FmFormInput, FmScreen},
        data() {
            return {
                toolbarProps: {
                    showBack: true,
                    title: 'Nouvelle discussion',
                    showMore: true,
                },
                formData: {
                    label: '',
                    participants: [],
                    startMessage: '',
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
        },
        methods: {
            sendForm() {
                if (!this.formData.participants.length || this.isSending) return;
                this.formData.startMessage = this.currUser.name + ' a créé la discussion';
                this.isSending = true;

                this.$store.dispatch(types.SAVE_DISCUSSION, this.formData)
                    .then((resp) => {
                        this.isSending = false;
                        this.$router.push({name: 'discussionsShow', params: {id: resp.data.id}});
                    });
            }
        },
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .fm-ic-btn {
    display: flex;
    align-items: center;
    padding: .875rem;

    &__icon {
      margin-right: .375rem;
    }
  }
</style>
