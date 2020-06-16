<template>
  <fm-screen :toolbarProps="toolbarProps" content-pos="center" class="sc-flats-search">
    <div class="sc-flats-search__headline">
      Indiquez ci-dessous la clé de la colocation que vous souhaitez rejoindre
    </div>

    <fm-form-input label="Clé" fi-name="key" :disabled="isSending" :autofocus="true"
                   placeholder="P8KdFLTh" class="sc-flats-search__key" :min="8" :max="8" :required="true"
                   @change-value="formData.key = $event">
      <template #tips>
        Respectez les minuscules et les majuscules
      </template>
    </fm-form-input>

    <p>
      Vous souhaitez
      <router-link :to="{name: 'flatsSearch'}" class="sc-flats-search__link">
        créer une nouvelle colocation
      </router-link>
      ?
    </p>

    <template #tab>
      <fm-bottom-bar>
        <div class="fm-ic-btn" @click="sendForm">
          <ic-search :width="20" :height="20" class="fm-ic-btn__icon">
          </ic-search>
          Rejoindre cette colocation
        </div>
      </fm-bottom-bar>
    </template>
  </fm-screen>
</template>

<script>
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmBottomBar from "../../components/FmBottomBar";
    import IcSearch from "../../components/icons/IcSearch";
    import FmFormInput from "../../components/form/FmFormInput";

    export default {
        name: "ScEventsShow",
        components: {
            FmFormInput,
            IcSearch,
            FmBottomBar,
            FmScreen
        },
        data() {
            return {
                toolbarProps: {
                    showBack: true,
                    title: 'Rejoindre une colocation',
                },
                isSending: false,
                formData: {
                    key: '',
                },
            };
        },
        methods: {
            sendForm() {
                if (this.isSending) return;
                this.isSending = true;
                this.$store.dispatch(types.JOIN_FLAT, this.formData)
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

  .sc-flats-search {
    &__headline {
      text-align: center;
      margin: -.5rem auto .25rem;
      font-size: 1.125rem;
      font-weight: $medium;
    }

    &__key {
      font-size: 1.25rem;
    }

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
