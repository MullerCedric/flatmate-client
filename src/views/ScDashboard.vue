<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <div>
        <div>Counter : {{ $store.state.count }} !</div>
        <div>
          <button @click="increment">Add</button>
        </div>
        <br>
      </div>
      <span @click="$router.push({ name: 'log-in' })">Log in</span>
    </ion-content>
  </ion-page>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: "ScDashboard",
        methods: {
            ...mapMutations([
                'increment',
            ]),
        },
    };
</script>

<style scoped>
</style>
