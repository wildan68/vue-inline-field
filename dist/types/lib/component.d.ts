import { PropType } from 'vue';
import type { IComponent } from '../types/config.type';
import 'dayjs/locale/id';
import 'dayjs/locale/en';
/**
 * Render Component.
 * @param component
 */
export declare const useComponent: () => {
    InlineField: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: PropType<any>;
            default: string;
        };
        fieldType: {
            type: PropType<IComponent["type"]>;
            required: true;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        dateFormat: {
            type: PropType<string>;
            default: string;
        };
        enterToSave: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: PropType<any>;
            default: string;
        };
        fieldType: {
            type: PropType<IComponent["type"]>;
            required: true;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        dateFormat: {
            type: PropType<string>;
            default: string;
        };
        enterToSave: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {
        modelValue: any;
        disabled: boolean;
        dateFormat: string;
        enterToSave: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
};
