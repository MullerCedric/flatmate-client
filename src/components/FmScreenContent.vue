<template>
  <main class="fm-screen__content">
    <slot></slot>
  </main>
</template>

<script>
    export default {
        name: "FmScreenContent"
    }
</script>

<style scoped>
  .fm-screen__content {
    padding: .5rem 1.5rem 1.75rem;
    max-height: 100%;
    overflow: auto;
  }
</style>
