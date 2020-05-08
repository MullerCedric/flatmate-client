<template>
  <div class="amount-display" :class="{ 'amount-display--sm': sm }">
    <span class="amount-display__sign">{{ sign }}</span>
    <span class="amount-display__amount">{{ value }}</span>
    <span class="amount-display__currency">{{ currency }}</span>
  </div>
</template>

<script>
    export default {
        name: "FmAmountDisplay",
        props: {
            amount: {
                type: Number,
                default: 0,
            },
            currency: {
                type: String,
                default: '€',
            },
            sm: {
                type: Boolean,
                default: false,
            }
        },
        computed: {
            value() {
                return this.formatValue(this.amount);
            },
            sign() {
                return this.amount > 0 ? '+' : '-';
            }
        },
        methods: {
            formatValue(x) {
                return Math.abs(x)
                    .toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings.scss";

  .amount-display {
    font-size: 2rem;
    margin: 0 auto;
    text-align: center;

    &__sign, &__currency {
      font-weight: $medium;
    }

    &__currency {
      color: $darkGrey;
      font-size: 1rem;
    }

    &__amount {
      font-weight: $bold;
    }

    &--sm {
      font-size: 1.5rem;
    }
  }
</style>
