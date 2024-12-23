import { App, Plugin } from 'vue';
import { useConfig } from './lib/config';
import type { IConfig, IComponent } from './types/config.type';
import { useComponent } from './lib/component';

import './style/index.css'

const VueInlineField: Plugin = {
  install(app: App, options?: IConfig) {
    const { setConfig } = useConfig()
    if (options) {
      setConfig(options);
    }
  },
};

export default VueInlineField
export { useConfig, IConfig, IComponent, useComponent }