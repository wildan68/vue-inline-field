import { MaybeElementRef } from "@vueuse/core";
import { MaybeRefOrGetter } from "vue";

export type IFunction<T> = (arg: T) => void

export interface OnClickOutsideOptions {
  ignore?: MaybeRefOrGetter<(MaybeElementRef | string)[]>

  capture?: boolean

  detectIframe?: boolean
}

export type OnClickOutsideHandler<T extends {
  detectIframe: OnClickOutsideOptions['detectIframe'];
} = {
  detectIframe: false
}> = (evt: T['detectIframe'] extends true ? PointerEvent | FocusEvent : PointerEvent) => void