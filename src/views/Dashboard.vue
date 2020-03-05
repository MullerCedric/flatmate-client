<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <span @click="$router.push({ name: 'log-in' })">Log in</span>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
</style>
