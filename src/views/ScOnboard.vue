<template>
  <fm-screen content-pos="center" :is-full-frame="true" class="sc-onboard">
    <router-link v-if="active + 1 < length" :to="{name: 'register'}" class="sc-onboard__link sc-onboard__link-skip">
      Passer
    </router-link>

    <ion-slides class="sc-onboard-slider" id="sc-onboard-slider" @ionSlideDidChange="updateIndex">
      <ion-slide class="sc-onboard__slide">
        <div class="sc-onboard__slide-inner">
          <h1 class="sc-onboard__title">
            Découvrez...
          </h1>
          <fm-logo animation-state="done" :showSlogan="true" class="sc-onboard__illu sc-onboard__illu--logo">
          </fm-logo>
        </div>
      </ion-slide>
      <ion-slide class="sc-onboard__slide">
        <div class="sc-onboard__slide-inner">
          <ill-calendar class="sc-onboard__illu">
          </ill-calendar>
          <div class="sc-onboard__sub-title">Un calendrier partagé</div>
          <p>
            Planifiez vos <strong>tâches ménagères</strong> ou prévoyez une <strong>soirée film</strong> dans le
            calendrier partagé de l'application&nbsp;!
          </p>
        </div>
      </ion-slide>
      <ion-slide class="sc-onboard__slide">
        <div class="sc-onboard__slide-inner">
          <ill-list class="sc-onboard__illu">
          </ill-list>
          <div class="sc-onboard__sub-title">Des notes collectives</div>
          <p>
            Pour une communication éphémère ou une information à ne pas oublier, une note n’aura jamais été plus
            <strong>simple</strong> à retrouver&nbsp;!
          </p>
        </div>
      </ion-slide>
      <ion-slide class="sc-onboard__slide">
        <div class="sc-onboard__slide-inner">
          <ill-wallet class="sc-onboard__illu">
          </ill-wallet>
          <div class="sc-onboard__sub-title">Une gestion des transactions</div>
          <p>
            Vous pouvez <strong>aussi</strong> gérer los frais communs sur le.flatmate. Plus question de laisser
            toujours le même payer le produit vaisselle&nbsp;!
          </p>
        </div>
      </ion-slide>
      <ion-slide class="sc-onboard__slide">
        <div class="sc-onboard__slide-inner">
          <ill-chat class="sc-onboard__illu">
          </ill-chat>
          <div class="sc-onboard__sub-title">Une messagerie instantannée</div>
          <p>
            La clé d'une bonne colocation, c'est la <strong>communication</strong>. Restez connecté grâce à une
            messagerie interne. Messeng&#8209;<em>quoi</em> ?
          </p>
          <fm-form-button @button-clicked="$router.push({name: 'register'})">
            Inscription
          </fm-form-button>
          <router-link :to="{name: 'log-in'}" tag="div" class="sc-register__link">
            Se connecter
          </router-link>
        </div>
      </ion-slide>
    </ion-slides>
    <div class="sc-onboard__footer">
      <div @click="prev"
           :class="['sc-onboard__link', 'sc-onboard__footer-link', 'sc-onboard__footer-link--left',
           {'sc-onboard__footer-link--hidden': active === 0}]">
        <ic-back class="sc-onboard__footer-back">
        </ic-back>
        Préc.
      </div>
      <div class="sc-onboard__pager">
        <div v-for="(bullet, index) in length" :key="index"
             :class="['sc-onboard__pager-bullet', {'sc-onboard__pager-bullet--active': index === active}]">
        </div>
      </div>
      <div @click="next"
           :class="['sc-onboard__link', 'sc-onboard__footer-link', 'sc-onboard__footer-link--right',
           {'sc-onboard__footer-link--hidden': active + 1 === length}]">
        Suiv.
        <ic-back class="sc-onboard__footer-next">
        </ic-back>
      </div>
    </div>
  </fm-screen>
</template>

<script>
    import FmScreen from "../components/FmScreen";
    import IcBack from "../components/icons/IcBack";
    import IllCalendar from "../components/illustrations/IllCalendar";
    import IllList from "../components/illustrations/IllList";
    import IllWallet from "../components/illustrations/IllWallet";
    import IllChat from "../components/illustrations/IllChat";
    import FmFormButton from "../components/form/FmFormButton";
    import FmLogo from "../components/FmLogo";

    export default {
        name: "ScOnboard",
        components: {FmLogo, FmFormButton, IllChat, IllWallet, IllList, IllCalendar, IcBack, FmScreen},
        data() {
            return {
                slider: null,
                length: 1,
                active: 0,
            };
        },
        mounted() {
            this.slider = window.document.getElementById('sc-onboard-slider');
            this.slider.length().then((length => this.length = length));
            this.slider.getActiveIndex().then((active => this.active = active));
        },
        methods: {
            updateIndex() {
                this.slider.getActiveIndex().then((active => this.active = active));
            },
            prev() {
                this.slider.slidePrev();
            },
            next() {
                this.slider.slideNext();
            },
        },
    }
</script>

<style lang="scss">
  @import "../assets/scss/settings";

  .sc-onboard {
    text-align: center;

    &__title {
      font-size: 2rem;
      font-weight: $medium;
    }

    &__slider {
      flex: 1;
    }

    &__slide {
      width: 100vw !important;

      &-inner {
        width: 100%;
        padding: 1.5rem;
      }
    }

    &__link {
      font-weight: $medium;
      color: $black;
      opacity: .6;

      &-skip {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        padding: 0 0 .5rem .5rem;
      }
    }

    &__illu {
      width: 40%;
      min-width: 4rem;
      max-width: 15rem;
      margin-bottom: .5rem;

      &--logo {
        width: 100%;
        max-width: 20rem;
      }
    }

    &__sub-title {
      font-size: 1.25rem;
      font-weight: $bold;
      color: $black;
      margin: 0 0 1.25rem;
    }

    &__footer {
      position: absolute;
      bottom: 1.75rem;
      left: 1.5rem;
      right: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-link {
        display: flex;
        align-items: center;

        &--left {
          padding: .5rem .5rem 0 0;
        }

        &--right {
          padding: .5rem 0 0 .5rem;
        }

        &--hidden {
          opacity: 0;
        }
      }

      &-next {
        transform: rotate(180deg);
      }
    }

    &__pager {
      width: auto;
      left: 50%;
      background-color: $white;
      padding: .15rem .5rem;
      border-radius: 1rem;
      box-shadow: 0 0 .15rem $shadow;
      display: flex;
      align-items: center;

      &-bullet {
        background-color: $grey;
        opacity: 1;
        height: .5rem;
        width: .5rem;
        border-radius: .5rem;
        transition: width .3s ease-in-out, background-color .2s ease-out;
        margin: .5rem .125rem;

        &--active {
          background-color: $main;
          width: 1.25rem;
        }
      }
    }
  }
</style>
