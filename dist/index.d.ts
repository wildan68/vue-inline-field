import { Plugin } from 'vue';
import { useConfig } from './lib/config';
import { IConfig, IComponent } from './types/config.type';
import { useComponent } from './lib/component';
declare const InlineField: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: import('vue').PropType<any>;
        default: string;
    };
    fieldType: {
        type: import('vue').PropType<IComponent["type"]>;
        required: true;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    dateFormat: {
        type: import('vue').PropType<string>;
        default: string;
    };
    enterToSave: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: import('vue').PropType<any>;
        default: string;
    };
    fieldType: {
        type: import('vue').PropType<IComponent["type"]>;
        required: true;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    dateFormat: {
        type: import('vue').PropType<string>;
        default: string;
    };
    enterToSave: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: any;
    disabled: boolean;
    dateFormat: string;
    enterToSave: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const VueInlineField: Plugin;
export default VueInlineField;
export { useConfig, IConfig, IComponent, useComponent, InlineField };
