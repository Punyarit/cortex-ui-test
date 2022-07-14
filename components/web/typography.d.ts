import { Colors } from '../types/colors.type';
import { WeightAttr } from '../types/weights.type';
import { BaseElement } from './base-element';
declare const ELEMENT_NAME = "c-typography";
export declare class Typography extends BaseElement {
    static styles: import("lit").CSSResult;
    p?: string;
    render(): import("lit-html").TemplateResult<1>;
    protected setFontStyle(fontSize: string): void;
}
declare global {
    namespace CTypography {
        interface Ref extends CBaseElement.Ref<string>, Colors, WeightAttr {
            p?: string;
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CTypography.Ref;
        }
    }
}
export {};
