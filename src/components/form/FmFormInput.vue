<template>
  <div class="fm-fi">
    <div class="fm-fi__heading">
      <fm-form-label :required="required" :fi-name="fiName" class="fm-fi__label"
                     :is-valid="isValid" :label="label" :input-type="inputType">
        <template #tips>
          <slot name="tips">
          </slot>
        </template>
      </fm-form-label>
      <fm-form-input-toggle v-if="inputType === 'toggle'" class="fm-fi__toggle" :disabled="disabled"
                            @change-value="$emit('change-value', $event)"
                            :initial-state="typeof defaultValue === 'boolean' ? defaultValue : undefined">
      </fm-form-input-toggle>
    </div>

    <fm-form-input-tag v-if="inputType === 'taglist'" :tags.sync="arrValue">
    </fm-form-input-tag>
    <input v-if="['select', 'textarea', 'radio', 'checkbox', 'toggle'].indexOf(inputType) === -1"
           :placeholder="placeholder" @input="$emit('change-value', value)"
           @keyup.enter.exact="addNewTag" @blur="addNewTag" @keyup.,.exact="addNewTag"
           :type="inputType === 'taglist' ? 'text' : inputType" :list="fiName + '-list'"
           :id="fiName" :name="fiName" :required="required" v-model="value"
           :autofocus="autofocus" :autocomplete="autocomplete" :disabled="isDisabled"
           class="fm-fi__input" :class="{ 'fm-fi__input--error': !isValid }">
    <datalist v-if="($slots.options && inputType === 'datalist') || datalistOptions.length" :id="fiName + '-list'">
      <slot name="options">
      </slot>
      <option v-for="opt in filteredDlOpt" :key="opt" :value="opt"/>
    </datalist>
    <textarea v-if="inputType === 'textarea'" :placeholder="placeholder"
              :type="inputType" :disabled="isDisabled" v-model="value"
              :id="fiName" :name="fiName" :required="required"
              :autofocus="autofocus" :autocomplete="autocomplete"
              class="fm-fi__input" :class="{ 'fm-fi__input--error': !isValid }"
              @change="$emit('change-value', value)">
    </textarea>
    <select v-if="$slots.options && inputType === 'select'" :multiple="multiple"
            :disabled="isDisabled" :placeholder="placeholder" v-model="value"
            :id="fiName" :name="fiName" :required="required"
            :autofocus="autofocus" :autocomplete="autocomplete"
            class="fm-fi__input" :class="{ 'fm-fi__input--error': !isValid }"
            @change="$emit('change-value', value)">
      <slot name="options">
      </slot>
    </select>
    <div v-if="inputs" class="fm-fi__inputs">
      <div v-for="el in inputs" :key="el.id" class="fm-fi__inputs-el" :class="'fm-fi__' + inputType">
        <input v-if="inputType !== 'checkbox'" :type="inputType" :id="el.id" :value="el.id" v-model="value"
               @change="$emit('change-value', value)" :disabled="isDisabled"/>
        <input v-if="inputType === 'checkbox'" :type="inputType" :id="el.id" :value="el.id" v-model="arrValue"
               @change="$emit('change-value', arrValue)" :disabled="isDisabled"/>
        <label :for="el.id" class="fm-fi__inputs-label">
          <div v-if="el.hasOwnProperty('avatar')" class="fm-fi__inputs-avatar"></div>
          {{ el.label }}
          <div v-if="inputType === 'checkbox'" class="fm-fi__checkbox-box"
               :style="el.color && !isDisabled && arrValue.indexOf(el.id) !== -1 ? 'background-color: ' + el.color: ''"
               :class="{ 'fm-fi__checkbox-box--active': arrValue.indexOf(el.id) !== -1, 'fm-fi__checkbox-box--disabled': isDisabled}">
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
    import FmFormLabel from "./FmFormLabel";
    import FmFormInputTag from "./FmFormInputTag";
    import FmFormInputToggle from "./FmFormInputToggle";

    export default {
        name: "FmFormInput",
        components: {FmFormInputToggle, FmFormInputTag, FmFormLabel},
        props: {
            label: {
                type: String,
                default: 'Label',
                required: true,
            },
            inputType: {
                type: String,
                default: 'text',
                validator: (val) => {
                    return [
                        'button',
                        'checkbox',
                        'color',
                        'datalist',
                        'date',
                        'datetime-local',
                        'email',
                        'file',
                        'image',
                        'month',
                        'number',
                        'password',
                        'radio',
                        'range',
                        'reset',
                        'search',
                        'select',
                        'taglist',
                        'tel',
                        'text',
                        'textarea',
                        'time',
                        'toggle',
                        'url',
                        'week',
                    ].indexOf(val) !== -1;
                },
            },
            inputs: {
                type: Array,
                validator: (val) => {
                    return val.every((curr => {
                        return curr.hasOwnProperty('label') && curr.hasOwnProperty('id')
                    }))
                },
            },
            fiName: {
                type: String,
                required: true,
            },
            autocomplete: {
                type: String,
                default: 'off',
            },
            autofocus: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            multiple: {
                type: Boolean,
                default: false,
            },
            placeholder: {
                type: String,
            },
            required: {
                type: Boolean,
                default: false,
            },
            validationRules: {
                type: String,
            },
            datalistOptions: {
                type: Array,
                default: () => [],
                validator: (arr) => {
                    return arr.every(val => {
                        return typeof val === 'string';
                    });
                },
            },
            min: {
                type: Number,
            },
            max: {
                type: Number,
            },
            defaultValue: {
                type: [String, Boolean, Array],
            }
        },
        data() {
            return {
                showTips: false,
                value: '',
                arrValue: [],
            }
        },
        computed: {
            filteredDlOpt() {
                return this.datalistOptions.filter((opt) => {
                    return this.arrValue.indexOf(opt) === -1;
                });
            },
            isDisabled() {
                return this.disabled ||
                    (['taglist', 'radio', 'checkbox'].indexOf(this.inputType) !== -1 && this.max && this.arrValue.length >= this.max);
            },
            isValid() {
                return true;
            },
        },
        mounted() {
            if (this.inputs && this.inputType === 'checkbox') {
                this.inputs.map((el) => {
                    if (el.hasOwnProperty('checked') && el.checked) {
                        this.arrValue.push(el.id);
                    }
                });
                this.$emit('change-value', this.arrValue);
            }
            if (this.defaultValue) {
                if (typeof this.defaultValue === 'string') {
                    this.value = this.defaultValue;
                    this.$emit('change-value', this.value);
                }
                if (Array.isArray(this.defaultValue)) {
                    this.arrValue = this.defaultValue;
                    this.$emit('change-value', this.arrValue);
                }
            }
        },
        methods: {
            addNewTag(event) {
                if (this.inputType !== 'taglist') return;
                if ('key' in event && event.key === ',') this.value = this.value.slice(0, -1);
                if (this.arrValue.indexOf(this.value) !== -1 || !this.value) return;
                this.arrValue.push(this.value);
                this.value = '';
                this.$emit('change-value', this.arrValue);
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  ::placeholder {
    color: $black;
    opacity: .5;
  }

  .fm-fi {
    &:nth-child(n+2) {
      margin-top: 1.25rem;
    }

    &__heading {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    &__label {
      flex: 1;
    }

    &__toggle {
      flex-shrink: 0;
    }

    &__input {
      width: 100%;
      border: none;
      box-shadow: none;
      background-color: $white;
      border-radius: .625rem;
      border-bottom: 1px solid $lightGrey;
      padding: .5rem .5rem;
      font-weight: $medium;

      &:focus {
        border-bottom: 1px solid $main;
      }

      &:disabled {
        background-color: $lightGrey;
      }
    }

    &__inputs {
      font-weight: $medium;
      margin-top: -.5rem;

      &-el {
        display: flex;
        align-items: center;
      }

      &-avatar {
        width: 2em;
        height: 2em;
        overflow: hidden;
        text-align: center;
        padding: 0;
        margin-right: .5rem;
        border-radius: 100%;
        box-shadow: 0 0 .15em $shadow;
        background-color: $grey;

        & img {
          max-width: 100%;
          margin: 0;
          padding: 0;
          border: none;
        }
      }

      &-label {
        flex: 1;
        display: flex;
        align-items: center;
        padding: .75rem .25rem;
        position: relative;
      }

      & input[type=checkbox] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    }

    &__checkbox {
      &-box {
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
        background-color: $white;
        border: 1px solid $lightGrey;
        position: absolute;
        right: 0;
        top: calc(50% - 1rem);

        &:after {
          display: block;
          content: '';
          position: absolute;
          width: 1rem;
          height: .5rem;
          border-bottom: .25rem solid transparent;
          border-left: .25rem solid transparent;
          transform: rotate(-45deg);
          left: .3125rem;
          top: .4375rem;
          border-radius: .125rem;
        }

        &--disabled {
          background-color: $lightGrey;
        }

        &--active {
          background-color: $main;

          &:after {
            border-bottom-color: $white;
            border-left-color: $white;
          }

          &.fm-fi__checkbox-box--disabled {
            background-color: $black;

            &:after {
              border-bottom-color: $lightGrey;
              border-left-color: $lightGrey;
            }
          }
        }
      }
    }
  }
</style>
