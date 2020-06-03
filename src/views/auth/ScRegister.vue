<template>
  <fm-screen content-pos="center">
    <form @submit.prevent>
      <fm-form-input label="Nom" fi-name="name" :disabled="isSending" input-type="text"
                     placeholder="John" @change-value="formData.name = $event" :required="true">
      </fm-form-input>
      <fm-form-input label="E-mail" fi-name="email" :disabled="isSending" input-type="email"
                     placeholder="john@gmail.com" @change-value="formData.email = $event" :required="true">
      </fm-form-input>
      <fm-form-input label="Mot de passe" fi-name="password" :disabled="isSending" input-type="password"
                     placeholder="••••••••" @change-value="formData.password = $event" :required="true">
      </fm-form-input>
      <fm-form-input label="Confirmer le mot de passe" fi-name="confirm-password" :disabled="isSending" input-type="password"
                     placeholder="••••••••" @change-value="formData.confirmPassword = $event" :required="true">
      </fm-form-input>
      <fm-form-button>
        Inscription
      </fm-form-button>

      <router-link :to="{name: 'log-in'}" tag="div" class="sc-login__link">
        Se connecter
      </router-link>
    </form>
  </fm-screen>
</template>

<script>
    //import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmFormInput from "../../components/form/FmFormInput";
    import FmFormButton from "../../components/form/FmFormButton";

    export default {
        name: "ScRegister",
        components: {FmFormButton, FmFormInput, FmScreen},
        data() {
            return {
                formData: {
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                },
                isSending: false,
            }
        },
        computed: {},
        mounted() {
            // this.$store.dispatch(types.HYDRATE_APP);
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
  .sc-login {
    &__link {
      text-align: center;
      margin-top: .75rem;
      padding: .125rem 0 .25rem;
    }
  }
</style>
