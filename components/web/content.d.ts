import { ClassAttributes, HTMLAttributes } from 'react';
import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "c-content";
export declare class Content extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CContent {
        interface Ref extends CElementBase.Ref<any, any> {
        }
        type Key = keyof Omit<CButton.Ref, keyof HTMLAttributes<CButton.Ref> | keyof ClassAttributes<CButton.Ref>>;
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CContent.Ref;
        }
    }
}
export {};
