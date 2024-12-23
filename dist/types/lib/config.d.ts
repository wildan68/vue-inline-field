import { IConfig } from '../types/config.type';
import { IFunction } from '../types/function.type';
export declare const useConfig: () => {
    setConfig: IFunction<Partial<IConfig>>;
    config: {
        components: Record<import("../types/config.type").IComponent["component"], import("vue").Component | null>;
        locale?: "en" | "id" | undefined;
    };
};
