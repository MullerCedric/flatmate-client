<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <form>
            <label>Username</label>
            <input type="text" />

            <label>Password</label>
            <input type="password" />

            <button type="submit">
                Register
            </button>
        </form>
        <span @click="$router.push({ name: 'log-in' })">Log in</span>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style scoped>
</style>
