import { Plugin } from 'vue';
import { useConfig } from './lib/config';
import type { IConfig, IComponent } from './types/config.type';
import { useComponent } from './lib/component';
import './style/index.css';
declare const VueInlineField: Plugin;
export default VueInlineField;
export { useConfig, IConfig, IComponent, useComponent };
