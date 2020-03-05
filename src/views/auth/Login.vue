<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Log in</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <form>
            <label>Username</label>
            <input type="text" />

            <label>Password</label>
            <input type="password" />

            <button type="submit">
                Log In
            </button>
        </form>
        <span @click="$router.push({ name: 'register' })">Register</span>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
</style>
