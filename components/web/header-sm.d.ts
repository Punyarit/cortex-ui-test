import { Typography } from './typography';
declare const ELEMENT_NAME = "header-sm";
export declare class HeaderSm extends Typography {
    firstUpdated(): void;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [ELEMENT_NAME]: CTypography.Ref;
        }
    }
}
export {};
