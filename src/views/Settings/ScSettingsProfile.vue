<template>
  <fm-screen :toolbarProps="toolbarProps">
    <fm-avatar-select :user-name="user.name" :user-avatar="user.avatar">
    </fm-avatar-select>

    <fm-confirm :buttons="[{value: 'cancel', label: 'Annuler'}, {
                    value: 'confirm',
                    label: 'Modifier',
                    type: 'primary',
                }]" @button-clicked="handleNameChange">
      <template #trigger>
        <div class="sc-settings-profile__link">
          <div class="sc-settings-profile__text">
            <div class="sc-settings-profile__name">
              Nom
            </div>
          </div>
          <div :class="['sc-settings-profile__value', { 'sc-settings-profile__value--sending': isSending }]">
            {{ user.name }}
          </div>
        </div>
      </template>
      <fm-form-input label="Nom" fi-name="name" :disabled="isSending" :autofocus="true"
                     placeholder="John" :default-value="user.name"
                     @change-value="formData.name = $event">
      </fm-form-input>
    </fm-confirm>

    <fm-confirm :buttons="[{value: 'cancel', label: 'Annuler'}, {
                    value: 'confirm',
                    label: 'Modifier',
                    type: 'primary',
                }]" @button-clicked="handleEmailChange">
      <template #trigger>
        <div class="sc-settings-profile__link">
          <div class="sc-settings-profile__text">
            <div class="sc-settings-profile__name">
              E-mail
            </div>
          </div>
          <div :class="['sc-settings-profile__value', { 'sc-settings-profile__value--sending': isSending }]">
            {{ user.email }}
          </div>
        </div>
      </template>
      <fm-form-input label="E-mail" fi-name="email" :disabled="isSending" :autofocus="true"
                     placeholder="john@gmail.com" :default-value="user.email"
                     input-type="email" @change-value="formData.email = $event">
      </fm-form-input>
    </fm-confirm>

    <fm-confirm :buttons="[{value: 'cancel', label: 'Annuler'}, {
                    value: 'confirm',
                    label: 'Modifier',
                    type: 'primary',
                }]" @button-clicked="handlePasswordChange">
      <template #trigger>
        <div class="sc-settings-profile__link">
          <div class="sc-settings-profile__text">
            <div class="sc-settings-profile__name">
              Mot de passe
            </div>
          </div>
          <div :class="['sc-settings-profile__value', { 'sc-settings-profile__value--sending': isSending }]">
            ••••••
          </div>
        </div>
      </template>
      <fm-form-input label="Ancien mot de passe" fi-name="old_password" :disabled="isSending" :autofocus="true"
                     input-type="password" placeholder="••••••••" @change-value="formData.old_password = $event">
      </fm-form-input>
      <fm-form-input label="Nouveau mot de passe" fi-name="password" :disabled="isSending"
                     input-type="password" placeholder="••••••••" @change-value="formData.password = $event">
      </fm-form-input>
      <fm-form-input label="Confirmer le mot de passe" fi-name="confirm-password"
                     :disabled="isSending" input-type="password" :required="true"
                     placeholder="••••••••" @change-value="formData.password_confirmation = $event">
      </fm-form-input>
    </fm-confirm>
  </fm-screen>
</template>

<script>
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmFormInput from "../../components/form/FmFormInput";
    import FmAvatarSelect from "../../components/FmAvatarSelect";
    import FmConfirm from "../../components/FmConfirm";

    export default {
        name: "ScSettingsProfile",
        components: {FmConfirm, FmAvatarSelect, FmFormInput, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Paramètres',
                    showBack: true,
                },
                formData: {
                    name: '',
                    email: '',
                    old_password: '',
                    password: '',
                    password_confirmation: '',
                },
                isSending: false,
            }
        },
        computed: {
            user() {
                return this.$store.getters[types.GET_USER];
            },
        },
        methods: {
            updateUserProp(payload) {
                if (this.isSending) return;
                window.console.log('uploading');
                this.isSending = true;
                this.$store.dispatch(types.PATCH_USER_PROP, payload)
                    .then(() => {
                        this.formData = {
                            name: '',
                            email: '',
                            old_password: '',
                            password: '',
                            password_confirmation: '',
                        };
                        this.isSending = false;
                    });
            },
            handleNameChange(status) {
                if (status !== 'confirm' || !this.formData.name.trim()) {
                    this.formData.name = '';
                    return;
                }

                this.updateUserProp({name: this.formData.name});
            },
            handleEmailChange(status) {
                if (status !== 'confirm' || !this.formData.email.trim()) {
                    this.formData.email = '';
                    return;
                }

                this.updateUserProp({email: this.formData.email});
            },
            handlePasswordChange(status) {
                if (status !== 'confirm') {
                    this.formData.old_password = '';
                    this.formData.password = '';
                    this.formData.password_confirmation = '';
                    window.console.log('annulé');
                    return;
                }
                if (!this.formData.old_password.trim()
                    || !this.formData.password.trim()
                    || !this.formData.password_confirmation.trim()) {
                    window.console.log('vide');
                    return;
                }

                this.updateUserProp({
                    old_password: this.formData.old_password,
                    password: this.formData.password,
                    password_confirmation: this.formData.password_confirmation,
                });
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .sc-settings-profile {
    &__link {
      display: flex;
      align-items: center;
      padding: .75rem .25rem;
      margin-bottom: .5rem;
      border-bottom: .0625rem solid $lightGrey;
    }

    &__text {
      flex-grow: 1;
      margin-right: .25rem;
      font-weight: $medium;
    }

    &__desc {
      font-size: .875rem;
      line-height: 1.25;
    }

    &__value {
      flex-shrink: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &--sending {
        opacity: .6;
      }
    }
  }
</style>
