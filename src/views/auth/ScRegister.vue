<template>
  <fm-screen content-pos="center" class="sc-register">
    <fm-logo animation-state="load" :showSlogan="true" class="sc-register__logo">
    </fm-logo>
    <form @submit.prevent>
      <fm-form-input label="Prénom" fi-name="name" :disabled="isSending" input-type="text"
                     placeholder="John" @change-value="formData.name = $event" :required="true">
      </fm-form-input>
      <fm-form-input label="E-mail" fi-name="email" :disabled="isSending" input-type="email"
                     placeholder="john@gmail.com" @change-value="formData.email = $event" :required="true">
      </fm-form-input>
      <fm-form-input label="Mot de passe" fi-name="password" :disabled="isSending" input-type="password"
                     placeholder="••••••••" @change-value="formData.password = $event" :required="true">
      </fm-form-input>
      <fm-form-input label="Confirmer le mot de passe" fi-name="confirm-password"
                     :disabled="isSending" input-type="password" :required="true"
                     placeholder="••••••••" @change-value="formData.password_confirmation = $event">
      </fm-form-input>
      <fm-form-button @button-clicked="sendForm" :disabled="isSending">
        <template v-if="!isSending">
          Inscription
        </template>
        <template v-else>
          <ic-loading width="20" height="20">
          </ic-loading>
        </template>
      </fm-form-button>

      <router-link :to="{name: 'log-in'}" tag="div" class="sc-register__link">
        Se connecter
      </router-link>
    </form>
  </fm-screen>
</template>

<script>
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmFormInput from "../../components/form/FmFormInput";
    import FmFormButton from "../../components/form/FmFormButton";
    import FmLogo from "../../components/FmLogo";
    import IcLoading from "../../components/icons/IcLoading";

    export default {
        name: "ScRegister",
        components: {IcLoading, FmLogo, FmFormButton, FmFormInput, FmScreen},
        data() {
            return {
                formData: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                },
                isSending: false,
            }
        },
        computed: {},
        methods: {
            sendForm() {
                if (this.isSending) return;
                this.isSending = true;
                this.$store.dispatch(types.REGISTER, this.formData)
                    .then(() => {
                        this.isSending = false;
                        this.$router.push({name: 'settingsUploadAvatar'});
                    });
            },
        }
    }
</script>

<style lang="scss" scoped>
  .sc-register {
    &__logo {
      max-width: 15rem;
      min-height: 5rem;
      align-self: center;
    }

    &__link {
      text-align: center;
      margin-top: .75rem;
      padding: .125rem 0 .25rem;
    }
  }
</style>
