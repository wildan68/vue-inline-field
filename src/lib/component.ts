import { useConfig } from './config'
import { h, defineComponent, PropType, ref, computed } from 'vue'
import type { IComponent } from '../types/config.type'
import { IFunction } from '../types/function.type'
import { onClickOutside } from '@vueuse/core'
import dayjs from 'dayjs'

import 'dayjs/locale/id'
import 'dayjs/locale/en'

/**
 * Render Component.
 * @param component
 */
export const useComponent = () => {
  const { config } = useConfig()
  const component = config.components

  const InlineField = defineComponent({
    name: "InlineField",
    props: {
      modelValue: {
        type: String as PropType<any>,
        default: "",
      },
      fieldType: {
        type: String as PropType<IComponent["type"]>,
        required: true,
      },
      disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
      dateFormat: {
        type: String as PropType<string>,
        default: 'DD MMMM YYYY'
      },
      enterToSave: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
    },
    emits: ["update:modelValue"],
    setup(props, { emit, attrs, slots }) {
      const isEdit = ref<boolean>(false)
      const compRef = ref<HTMLElement | null>(null)
      const slotRef = ref<HTMLElement | null>(null)

      const isValidDate = (date: string | string[]) => {
        if (Array.isArray(date)) {
          return date.every((d) => dayjs(d).isValid())
        }

        return dayjs(date).isValid()
      }

      const isArrayDate = (date: string | string[], format?: string) => {
        if (Array.isArray(date)) {
          return date.map((v) => dayjs(v).locale(config.locale || 'en').format(format || 'YYYY-MM-DD'))
        }
        
        return dayjs(date).locale(config.locale || 'en').format(format || 'YYYY-MM-DD')
      }

      const labelDate = computed(() => {
        const date = isArrayDate(props.modelValue, props.dateFormat)
        return Array.isArray(date) ? date.join(' - ') : date
      })

      const onInput = (value: string | string[]) => {
        if (isValidDate(value)) {
          isArrayDate(value)
        }

        emit("update:modelValue", value);
      }

      const onkeydown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          if (!props.enterToSave) return
          isEdit.value = false
        }
      }

      const onEdit = () => {
        if (props.disabled) return

        isEdit.value = true
      }

      const cLabel = computed(() =>{
        if (props.disabled) {
          return 'inline-field-placeholder'
        }

        return `inline-field-label ${(!props.modelValue && attrs?.placeholder) && 'inline-field-placeholder'}`
      })

      const slotsList = Object.keys(slots).filter((key) => key !== 'default').map((key) => key)
  
      return () => {
        if (!component[props.fieldType]) {
          throw new Error(`Component FieldType#${props.fieldType} not found. Register the component first.`);
        }

        if (!isEdit.value || props.disabled) {
          return h('span', {
            class: cLabel.value,
            onClick: onEdit,
          }, isValidDate(props.modelValue) ? labelDate.value
            : props.modelValue ? props.modelValue 
            : attrs?.placeholder || ''
          )
        }

        onClickOutside(compRef, () => isEdit.value = false, { ignore: [slotRef] })

        return h('div', { ref: compRef }, 
          [
            h(component[props.fieldType] || 'input', {
              modelValue: props.modelValue,
              ...attrs,
              'onUpdate:modelValue': onInput,
              onkeydown,
            }, [
              ...slotsList,
              slots.default && h(slots.default, { ref: slotRef }),
            ])
          ]
        )
      }
    },
  })

  return { InlineField }
}