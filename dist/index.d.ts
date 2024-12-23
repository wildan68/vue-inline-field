import { Plugin } from 'vue';
import { useConfig } from './lib/config';
import { IConfig, IComponent } from './types/config.type';
import { useComponent } from './lib/component';
declare const VueInlineField: Plugin;
export default VueInlineField;
export { useConfig, IConfig, IComponent, useComponent };
