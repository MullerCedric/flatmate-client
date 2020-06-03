<template>
  <fm-screen :toolbarProps="toolbarProps">
    <form @submit.prevent>
      <fm-form-group>
        <fm-form-input label="Recevoir des notifications push" fi-name="push" input-type="toggle"
                       :default-value="true" :disabled="isSending">
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
    // import * as types from "../store/types";

    import FmScreen from "../components/FmScreen";
    import FmFormGroup from "../components/form/FmFormGroup";
    import FmFormInput from "../components/form/FmFormInput";

    export default {
        name: "ScSettingsNotifications",
        components: {FmFormInput, FmFormGroup, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Paramètres',
                    type: 'settings',
                    showBack: true,
                    showAvatar: false,
                },
                formData: {},
                isSending: false,
            }
        },
        computed: {},
        methods: {}
    }
</script>

<style lang="scss" scoped>
</style>
