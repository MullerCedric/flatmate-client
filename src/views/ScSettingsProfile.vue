<template>
  <fm-screen :toolbarProps="toolbarProps">
    <form @submit.prevent>
      <div class="fm-settings__avatar">
        <fm-avatar size="xl" :user-name="userName">
        </fm-avatar>
        <fm-form-input label="Avatar" fi-name="avatar" :disabled="isSending" input-type="file">
        </fm-form-input>
      </div>
      <fm-form-group>
        <fm-form-input label="Nom" fi-name="name" :disabled="isSending"
                       placeholder="John" @change-value="formData.name = $event">
        </fm-form-input>
        <fm-form-input label="E-mail" fi-name="email" :disabled="isSending" input-type="email"
                       placeholder="John" @change-value="formData.name = $event">
        </fm-form-input>
      </fm-form-group>
    </form>
    <div>
      <p>
        Prochainement...
      </p>
    </div>
  </fm-screen>
</template>

<script>
    //import * as types from "../store/types";

    import FmScreen from "../components/FmScreen";
    import FmAvatar from "../components/FmAvatar";
    import FmFormGroup from "../components/form/FmFormGroup";
    import FmFormInput from "../components/form/FmFormInput";
    import * as types from "../store/types";

    export default {
        name: "ScSettingsProfile",
        components: {FmFormInput, FmFormGroup, FmAvatar, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Paramètres',
                    type: 'settings',
                    showBack: true,
                },
                formData: {
                    name: '',
                    email: '',
                },
                isSending: false,
            }
        },
        computed: {
            userName() {
                return this.$store.getters[types.GET_USER].name;
            },
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
</style>
