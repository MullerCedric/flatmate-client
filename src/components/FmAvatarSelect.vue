<template>
  <div class="fm-avatar-select">
    <div class="fm-avatar-select__input" @click="handleAvatarSelection">
      <fm-avatar size="xl" :user-name="userName" :img-url="userAvatar">
      </fm-avatar>
      <div class="fm-avatar-select__input-icon">
        <ic-edit v-if="!isSending" width="18" height="18">
        </ic-edit>
        <ic-loading v-if="isSending" width="18" height="18">
        </ic-loading>
      </div>
      <label for="avatar" style="display: none">Avatar</label>
      <input id="avatar" name="avatar" ref="avatarInput" style="display: none;"
             type="file" accept=".png,.jpeg,.jpg" @change="handleAvatarChange">
    </div>
    <fm-alert :is-floating="true" v-if="imgUrl">
      <fm-avatar :img-url="imgUrl" :prepend-base="false"
                 size="wide" class="fm-avatar-select__image">
      </fm-avatar>
      <template #footer>
        <div class="fm-avatar-select__buttons">
          <fm-button @button-clicked="handleCancel"
                     class="fm-avatar-select__button">
            Annuler
          </fm-button>
          <fm-button type="primary" @button-clicked="handleSubmit"
                     class="fm-avatar-select__button">
            Valider
          </fm-button>
        </div>
      </template>
    </fm-alert>
  </div>
</template>

<script>
    import FmButton from "./FmButton";
    import FmAvatar from "./FmAvatar";
    import IcEdit from "./icons/IcEdit";
    import * as types from "../store/types";
    import IcLoading from "./icons/IcLoading";
    import FmAlert from "./FmAlert";

    export default {
        name: "FmAvatarSelect",
        components: {FmAlert, IcLoading, IcEdit, FmAvatar, FmButton},
        props: {
            userName: {
                type: String,
                required: true,
            },
            userAvatar: {
                type: String,
            },
        },
        data() {
            return {
                imgUrl: '',
                file: null,
                isSending: false,
            };
        },
        methods: {
            handleAvatarSelection() {
                if (this.isSending) return;
                this.$refs.avatarInput.click();
            },
            handleAvatarChange(event) {
                this.file = event.target.files[0];
                if (this.file) {
                    this.imgUrl = URL.createObjectURL(this.file);
                }
            },
            handleCancel() {
                this.imgUrl = '';
                this.file = null;
            },
            handleSubmit() {
                let formData = new FormData();
                formData.append('avatar', this.file, this.file.name);

                if (this.isSending) return;
                this.isSending = true;
                this.handleCancel();
                this.$store.dispatch(types.UPLOAD_AVATAR, formData)
                    .then(() => {
                        this.isSending = false;
                        this.$emit('avatar-uploaded');
                    });
            },
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";
  @import "../assets/scss/tools";

  .fm-avatar-select {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    &__input {
      position: relative;

      &-icon {
        position: absolute;
        right: .5rem;
        bottom: .5rem;
        background-color: $black;
        color: $white;
        line-height: 1;
        padding: .5rem;
        border-radius: 100%;
      }
    }

    &__image {
      margin-left: auto;
      margin-right: auto;
      width: 85%;
    }

    &__buttons {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0;
    }

    &__button {
      margin: 0 .5rem;
    }
  }

</style>
