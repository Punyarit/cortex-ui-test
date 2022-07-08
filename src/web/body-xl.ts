import {customElement} from 'lit/decorators.js';
import {Typography} from './typography';

const ELEMENT_NAME = 'body-xl';

@customElement(ELEMENT_NAME)
export class BodyXl extends Typography {
  firstUpdated() {
    this.setFontSize('var(--fs-20)');
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CTypography.Ref;
    }
  }
}
