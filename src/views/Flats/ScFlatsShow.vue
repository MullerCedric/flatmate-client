<template>
  <fm-screen v-if="flat" :toolbarProps="toolbarProps" class="sc-flats-show">
    <div class="sc-flats-show__label">
      {{ flat.label }}
    </div>
    <fm-avatar-select :user-name="flat.label" :user-avatar="flat.avatar">
    </fm-avatar-select>
    <section>
      <h2>
        Clé de la colocation
      </h2>
      <div class="sc-flats-show__section-content">
        <ic-key class="sc-flats-show__section-icon">
        </ic-key>
        <div class="sc-flats-show__section-val">
          <div class="sc-flats-show__key">
            {{ flat.key }}
          </div>
        </div>
      </div>
      <div class="sc-flats-show__side-note">
        Donnez la clé ci-dessus à vos colocataires pour qu'ils puissent rejoindre la colocation sur le.flatmate&nbsp;!
      </div>
    </section>
    <section>
      <h2>
        Membres de cette colocation
      </h2>
      <div class="sc-flats-show__section-content">
        <ic-person class="sc-flats-show__section-icon">
        </ic-person>
        <div class="sc-flats-show__section-val">
            <span v-for="(user, index) in flat.participants" :key="user.id">
              {{ user.name }}{{ index + 1 !== flat.participants.length ? ', ': '' }}
            </span>
        </div>
      </div>
    </section>
    <section v-if="flat.address">
      <h2>
        Adresse
      </h2>
      <div class="sc-flats-show__section-content">
        <ic-home class="sc-flats-show__section-icon">
        </ic-home>
        <div class="sc-flats-show__section-val">
          {{ flat.address }}
        </div>
      </div>
    </section>
    <section v-if="flat.landlord">
      <h2>
        Coordonnées du propriétaire
      </h2>
      <div class="sc-flats-show__section-content">
        <ic-person class="sc-flats-show__section-icon">
        </ic-person>
        <div class="sc-flats-show__section-val">
          {{ flat.landlord }}
        </div>
      </div>
    </section>

    <!--<template #tab>
      <fm-bottom-bar>
        <div class="fm-ic-btn" @click="handleDelete">
          <ic-bin :width="20" :height="20" class="fm-ic-btn__icon">
          </ic-bin>
          Supprimer
        </div>
        <router-link tag="div" class="fm-ic-btn"
                     :to="{name: 'flatsEdit', params: {id:flat.id}, query: { selectedDate } }">
          <ic-edit :width="20" :height="20" class="fm-ic-btn__icon">
          </ic-edit>
          Modifier
        </router-link>
      </fm-bottom-bar>
    </template>-->
  </fm-screen>
</template>

<script>
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import IcPerson from "../../components/icons/IcPerson";
    import IcKey from "../../components/icons/IcKey";
    import FmAvatarSelect from "../../components/FmAvatarSelect";
    import IcHome from "../../components/icons/IcHome";
    /*import FmBottomBar from "../../components/FmBottomBar";
    import IcEdit from "../../components/icons/IcEdit";
    import IcBin from "../../components/icons/IcBin";*/

    export default {
        name: "ScEventsShow",
        components: {
            IcHome,
            FmAvatarSelect,
            IcKey,
            /*IcBin,
            IcEdit,
            FmBottomBar,*/
            IcPerson,
            FmScreen
        },
        data() {
            return {
                toolbarProps: {
                    showBack: true,
                    title: 'Détails',
                },
            }
        },
        computed: {
            currUser() {
                return this.$store.getters[types.GET_USER];
            },
            flat() {
                return this.$store.getters[types.GET_FLAT_FROM_ID](this.$route.params.id);
            },
        },
        methods: {
            handleDelete() {
                if (window.confirm('Êtes-vous vraiment sûr de supprimer cette colocation ? Cette action est définitive')) {
                    /*this.$store.dispatch(types.DELETE_EVENT, this.flat.id)
                        .then(() => {
                            this.$router.push({name: 'flatsCalendar'});
                        });*/
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .sc-flats-show {
    &__label {
      font-size: 1.25rem;
      font-weight: $bold;
      color: $black;
      margin: 0 0 .125rem;
    }

    &__section {
      &-content {
        display: flex;
      }

      &-icon {
        flex-shrink: 0;
        margin-right: .5rem;
      }

      &-val {
        flex: 1;
      }
    }

    &__key {
      font-size: 1.125rem;
      font-weight: $medium;
      letter-spacing: .25rem;
      background-color: $white;
      display: inline-block;
      padding: .125rem .5rem .125rem .75rem;
      border-radius: .25rem;
      user-select: text;
    }

    &__side-note {
      font-size: .875rem;
      margin-top: .5rem;
      line-height: 1.25;
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
