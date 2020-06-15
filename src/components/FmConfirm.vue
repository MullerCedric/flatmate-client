<template>
  <div>
    <div @click="show = true">
      <slot name="trigger">
      </slot>
    </div>
  <fm-alert :is-floating="true" v-if="show" :buttons="buttonsValue" @button-clicked="sendConfirm">
    <slot>
    </slot>
    <template v-if="this.$slots.footer" #footer>
      <slot name="footer">
      </slot>
    </template>
  </fm-alert>
  </div>
</template>

<script>
    import FmAlert from "./FmAlert";

    export default {
        name: "FmConfirm",
        components: {FmAlert},
        props: {
            buttons: {
                type: Array,
            },
        },
        data() {
            return {
                show: false,
            };
        },
        computed: {
            buttonsValue() {
                if (this.buttons) return this.buttons;
                return this.$slots.footer ? [] : [{value: 'cancel', label: 'Annuler'}, {
                    value: 'confirm',
                    label: 'Confirmer',
                    type: 'primary'
                }];
            },
        },
        methods: {
            sendConfirm(status) {
                this.show = false;
                this.$emit('button-clicked', status);
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>
