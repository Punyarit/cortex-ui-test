import { ElementBase } from '../base/element-base';
declare const ELEMENT_NAME = "c-input";
export declare class Input extends ElementBase {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    namespace CInput {
        interface Ref extends CElementBase.Ref<any, any> {
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CInput.Ref;
        }
    }
}
export {};
