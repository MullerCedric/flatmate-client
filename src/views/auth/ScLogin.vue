<template>
  <fm-screen content-pos="center">
    <fm-logo animation-state="done" :showSlogan="false" class="sc-login__logo">
    </fm-logo>
    <form @submit.prevent>
      <fm-form-input label="E-mail" fi-name="email" :disabled="isSending" input-type="email"
                     placeholder="john@gmail.com" @change-value="formData.email = $event" :required="true">
      </fm-form-input>
      <fm-form-input label="Mot de passe" fi-name="password" :disabled="isSending" input-type="password"
                     placeholder="••••••••" @change-value="formData.password = $event" :required="true">
      </fm-form-input>
      <fm-form-button @button-clicked="sendForm" :disabled="isSending">
        Connexion
      </fm-form-button>

      <router-link :to="{name: 'register'}" tag="div" class="sc-login__link">
        S'inscrire
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

    export default {
        name: "ScLogin",
        components: {FmLogo, FmFormButton, FmFormInput, FmScreen},
        data() {
            return {
                formData: {
                    email: '',
                    password: '',
                },
                isSending: false,
            }
        },
        methods: {
            sendForm() {
                if (this.isSending) return;
                this.isSending = true;
                this.$store.dispatch(types.CONNECT, this.formData)
                    .then(() => {
                        this.isSending = false;
                        this.$router.push({name: 'dashboard'});
                    });
            },
        },
    }
</script>

<style lang="scss" scoped>
  .sc-login {
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
