import { reactive } from 'vue'
import { IConfig } from '../types/config.type'
import { IFunction } from '../types/function.type'

const config = reactive<IConfig>({
  components: {},
  locale: 'en'
})

export const useConfig = () => {
  /**
   * Set Config
   */
  const setConfig: IFunction<Partial<IConfig>> = ({ components, locale }) => {
    config.components = { ...config.components, ...components }
    locale && (config.locale = locale)
  }

  return {
    setConfig,
    config
  }
}