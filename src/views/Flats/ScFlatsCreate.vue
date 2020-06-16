<template>
  <fm-screen :toolbarProps="toolbarProps">
    <form @submit.prevent>
      <fm-form-input label="Nom de la colocation" fi-name="label" :disabled="isSending"
                     :default-value="flatLabel" :required="true"
                     placeholder="Coloc St Lambert" @change-value="formData.label = $event">
      </fm-form-input>
      <fm-form-input label="Adresse" fi-name="address" :disabled="isSending"
                     :default-value="flatAddress" input-type="textarea" @change-value="formData.address = $event"
                     placeholder="Rue du Palais 43
4000 Liège">
      </fm-form-input>
      <fm-form-input label="Coordonnées du propriétaire" fi-name="landlord" :disabled="isSending"
                     :default-value="flatLandlord" input-type="textarea" @change-value="formData.landlord = $event"
                     placeholder="Paul Depuis, +32 479 27 85 29">
      </fm-form-input>
    </form>
    <p>
      Vous pourrez inviter vos colocataires après la création de la colocation dans le.flatmate
    </p>
    <p>
      Vous souhaitez rejoindre une colocation déjà créée ?
      <router-link :to="{name: 'flatsSearch'}" class="sc-flats-create__link">
        Cliquez ici pour en indiquer la clé
      </router-link>
    </p>

    <template #tab>
      <fm-bottom-bar>
        <div class="fm-ic-btn" @click="sendForm">
          <component :is="isSending ? 'ic-loading' : 'ic-checkmark'" width="20" height="20" class="fm-ic-btn__icon">
          </component>
          {{ $route.params.id ? 'Modifier la colocation' : 'Créer la colocation'}}
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
        name: "ScFlatsCreate",
        components: {IcCheckmark, IcLoading, FmBottomBar, FmFormGroup, FmFormInput, FmScreen},
        data() {
            return {
                toolbarProps: {
                    showBack: true,
                    title: this.$route.params.id ? 'Modifier la colocation' : 'Créer une colocation',
                    showMore: true,
                },

                formData: {
                    label: '',
                    address: '',
                    landlord: '',
                },
                isSending: false,
            }
        },
        computed: {
            currUser() {
                return this.$store.getters[types.GET_USER];
            },
            flat() {
                if (this.$route.name === 'flatsEdit') {
                    return this.$store.getters[types.GET_FLAT_FROM_ID](this.$route.params.id);
                } else {
                    return {};
                }
            },
            flatUsers() {
                return this.$store.getters[types.GET_FLAT_USERS].length ? this.$store.getters[types.GET_FLAT_USERS].map((el) => {
                    return {
                        'avatar': el.avatar,
                        'userName': el.name,
                        'color': el.color,
                        'label': el.id === this.currUser.id ? el.name + ' (moi)' : el.name,
                        'checked': (el.id === this.currUser.id || (this.flat.participants && this.flat.participants.find((user) => user.id === el.id))),
                        'id': el.id
                    };
                }) : [];
            },
            flatLabel() {
                return this.flat.label || '';
            },
            flatAddress() {
                return this.flat.address || '';
            },
            flatLandlord() {
                return this.flat.landlord || '';
            },
        },
        methods: {
            sendForm() {
                if (this.isSending) return;
                this.isSending = true;
                if (this.$route.params.id) {
                    this.formData.id = this.$route.params.id;
                }
                this.$store.dispatch(types.SAVE_FLAT, this.formData)
                    .then(() => {
                        this.isSending = false;
                        this.$router.push({name: 'dashboard'});
                    });
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .sc-flats-create {
    &__link {
      font-weight: $medium;
      color: $main;
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
