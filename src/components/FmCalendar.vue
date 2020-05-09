<template>
  <section class="fm-calendar">
    <div class="fm-calendar__heading">
      <h2 class="fm-calendar__title">
        {{ months[selectedDate.getMonth()] + ' ' + selectedDate.getFullYear() }}
      </h2>
      <div class="fm-calendar__nav">
        <div @click="setPrevMonth">
          <ic-back height="16" width="16" :stroke-width="40" class="fm-calendar__prev"></ic-back>
        </div>
        <div @click="setCurrentDate">
          &bullet;
        </div>
        <div @click="setNextMonth">
          <ic-back height="16" width="16" :stroke-width="40" class="fm-calendar__next"></ic-back>
        </div>
      </div>
    </div>
    <div class="fm-calendar__dates">
      <div v-for="day in weekDays" :key="day">{{ day }}</div>

      <div v-for="(n, index) in (firstDayPos - 1)"
           :key="'prev'+index"
           @click="selectPrevDate((daysInPrevMonth + 1) - firstDayPos + n)"
           class="fm-calendar__date fm-calendar__date--blurred">
        {{ (daysInPrevMonth + 1) - firstDayPos + n }}
      </div>

      <div v-for="(n, index) in daysInSelectedMonth"
           :key="'day'+index"
           @click="selectDate(n)"
           class="fm-calendar__date" :class="{
            'fm-calendar__date--selected' : n === selectedDate.getDate(),
            'fm-calendar__date--today' : isToday(n),
        }">
        {{ n }}
      </div>

      <div v-for="(n, index) in (visibleDaysFromNext)"
           :key="'next'+index"
           @click="selectNextDate(n)"
           class="fm-calendar__date fm-calendar__date--blurred">
        {{ n }}
      </div>
    </div>
  </section>
</template>

<script>
    import IcBack from "./icons/IcBack";

    export default {
        name: "FmCalendar",
        components: {IcBack},
        data() {
            return {
                weekDays: [
                    'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'
                ],
                months: [
                    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
                ],
                selectedDate: null,
                today: null,
            }
        },
        computed: {
            daysInSelectedMonth() {
                return new Date(
                    this.selectedDate.getFullYear(),
                    this.selectedDate.getMonth() + 1, 0)
                    .getDate()
            },
            daysInPrevMonth() {
                return new Date(
                    (this.getPrevMonth(this.selectedDate)).getFullYear(),
                    this.selectedDate.getMonth(), 0
                ).getDate();
            },
            daysInNextMonth() {
                return new Date(
                    (this.getNextMonth(this.selectedDate)).getFullYear(),
                    this.selectedDate.getMonth(), 0
                ).getDate();
            },
            visibleDaysFromNext() {
                return 36 - (this.daysInSelectedMonth + this.firstDayPos) >= 0 ?
                    36 - (this.daysInSelectedMonth + this.firstDayPos) :
                    7 + (36 - (this.daysInSelectedMonth + this.firstDayPos));
            },
            firstDayPos() {
                let firstDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1).getDay();
                if (firstDay === 0) firstDay = 7;
                return firstDay;
            },
        },
        created() {
            this.setCurrentDate();
        },
        methods: {
            selectDate(day) {
                this.selectedDate = new Date(
                    this.selectedDate.getFullYear(),
                    this.selectedDate.getMonth(),
                    day);
            },
            selectPrevDate(day) {
                this.setPrevMonth();
                this.selectDate(day);
            },
            selectNextDate(day) {
                this.setNextMonth();
                this.selectDate(day);
            },
            setCurrentDate() {
                this.selectedDate = new Date();
                this.today = new Date();
            },
            setPrevMonth() {
                if (this.daysInPrevMonth < this.selectedDate.getDate()) {
                    this.selectedDate.setDate(this.daysInPrevMonth);
                }
                this.selectedDate = this.getPrevMonth(this.selectedDate);
            },
            setNextMonth() {
                if (this.daysInNextMonth < this.selectedDate.getDate()) {
                    this.selectedDate.setDate(this.daysInNextMonth);
                }
                this.selectedDate = this.getNextMonth(this.selectedDate);
            },
            getPrevMonth(oldDate) {
                let newDate = new Date(oldDate.getTime());
                return new Date(newDate.setMonth(newDate.getMonth() - 1));
            },
            getNextMonth(oldDate) {
                let newDate = new Date(oldDate.getTime());
                return new Date(newDate.setMonth(newDate.getMonth() + 1));
            },
            isToday(n) {
                return (
                    n === this.today.getDate() &&
                    this.selectedDate.getMonth() === this.today.getMonth() &&
                    this.selectedDate.getFullYear() === this.today.getFullYear()
                );
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-calendar {
    background-color: $white;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;

    &__heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__nav {
      display: flex;
      border-radius: .75rem;
      overflow: hidden;

      & > * {
        padding: .25rem .375rem;
        background-color: $black;
        color: $white;

        &:nth-child(2) {
          border-left: 1px solid $darkGrey;
          border-right: 1px solid $darkGrey;
          padding: .25rem .625rem;
        }
      }
    }

    &__next {
      transform: rotate(180deg);
    }

    &__dates {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      text-align: center;
      gap: .75rem .5rem;
    }

    &__date {
      width: auto;
      padding: .25rem;
      font-weight: $bold;
      border-radius: .75rem;

      &:nth-child(7n+13), &:nth-child(7n+14) {
        &:not(.fm-calendar__date--today):not(.fm-calendar__date--selected):not(.fm-calendar__date--blurred) {
          opacity: .5;
        }
      }

      &--today {
        color: $main;
        opacity: 1;
      }

      &--selected {
        background-color: $black;
        color: $white;
        opacity: 1;

        &.fm-calendar__date--today {
          background-color: $main;
        }
      }

      &--blurred {
        opacity: .25;
      }
    }
  }
</style>
