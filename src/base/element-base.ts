import {LitElement} from 'lit';
import {property, state} from 'lit/decorators.js';
import {ClassAttributes, HTMLAttributes} from 'react';
import {ElementBaseAttr} from '../types/element-base.type';

export abstract class ElementBase extends LitElement {
  @property({type: Object}) public sx?: any;
  @property({type: Object}) public cfx?: Record<string, string>;

  @state() protected defaultStyles: Record<string, any> = {};
  @state() protected defaultConfig: Record<string, any> = {};

  willUpdate(changedProperties: Map<PropertyKey, unknown>) {
    if (changedProperties.has('sx')) {
      this.defaultStyles = this.updateAttributes(this.sx, this.defaultStyles);
    }

    if (changedProperties.has('cfx')) {
      this.defaultConfig = this.updateAttributes(this.cfx, this.defaultConfig);
    }
    super.willUpdate(changedProperties);
  }

  protected checkAttributesLength(expectedLength: number): void {
    if (this.attributes.length > expectedLength) {
      throw new Error(
        `${this.tagName.toLowerCase()}: Expected ${expectedLength} attribute${
          expectedLength > 1 ? 's' : ''
        }, but got ${this.attributes.length}.`
      );
    }
  }

  private updateAttributes(styles: any, updatedAttributes: any): any {
    for (const key in styles) {
      updatedAttributes[key] = styles[key];
    }
    return {...updatedAttributes};
  }
}

declare global {
  namespace CElementBase {
    interface Ref<SX, CFX>
      extends Omit<HTMLAttributes<Ref<SX, CFX>>, 'color' | 'placeholder'>,
        ClassAttributes<Ref<SX, CFX>>,
        ElementBaseAttr {
      ex?: void;
      sx?: SX | string;
      cfx?: CFX | string;
    }
  }
}
