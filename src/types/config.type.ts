import type { Component } from 'vue'

export type IComponent = {
  id: string
  type: string
  component: string
  props?: Record<string, any>
  slots?: any
  config?: {
    key: string
  }
}

export type IConfig = {
  components: Record<IComponent["component"], Component | null>,
  locale?: 'en' | 'id'
}
