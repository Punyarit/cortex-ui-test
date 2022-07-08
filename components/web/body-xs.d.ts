import { Typography } from './typography';
declare const ELEMENT_NAME = "body-xs";
export declare class BodyXs extends Typography {
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
