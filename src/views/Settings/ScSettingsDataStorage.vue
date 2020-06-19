<template>
  <fm-screen :toolbarProps="toolbarProps">
    <fm-preview>
      <fm-form-group>
        <fm-form-input label="Recevoir des notifications push" fi-name="push" input-type="toggle"
                       :default-value="false" :disabled="isSending">
        </fm-form-input>
        <fm-form-input label="Activer notifications" fi-name="push2" input-type="toggle"
                       :default-value="false" :disabled="isSending">
        </fm-form-input>
        <fm-form-input label="Un autre réglage" fi-name="push3" input-type="toggle"
                       :default-value="true" :disabled="isSending">
        </fm-form-input>
      </fm-form-group>
      <fm-form-group>
        <fm-form-input label="Recevoir des notifications push" fi-name="push" input-type="toggle"
                       :default-value="true" :disabled="isSending">
        </fm-form-input>
        <fm-form-input label="Activer notifications" fi-name="push2" input-type="toggle"
                       :default-value="true" :disabled="isSending">
        </fm-form-input>
      </fm-form-group>
    </fm-preview>
  </fm-screen>
</template>

<script>
    // import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmFormGroup from "../../components/form/FmFormGroup";
    import FmFormInput from "../../components/form/FmFormInput";
    import FmPreview from "../../components/FmPreview";

    export default {
        name: "ScSettingsDataStorage",
        components: {FmPreview, FmFormInput, FmFormGroup, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Paramètres',
                    showBack: true,
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
