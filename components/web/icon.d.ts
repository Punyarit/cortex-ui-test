import { LitElement } from 'lit';
import { ClassAttributes, HTMLAttributes } from 'react';
import { IGray, IPrimary } from '../types/colors.type';
import { TIcons } from '../types/icons.type';
declare const ELEMENT_NAME = "c-icon";
export declare class Icon extends LitElement {
    static styles: import("lit").CSSResult;
    icon: string;
    size: string;
    color: string;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    namespace CIcon {
        interface Ref extends Omit<HTMLAttributes<Ref>, 'color' | 'placeholder'>, ClassAttributes<Ref> {
            icon: TIcons;
            size?: string;
            color?: IPrimary | IGray;
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CIcon.Ref;
        }
    }
    namespace C { }
}
export {};
