import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {StartScreenAttr} from '../types/start-screen.type';
import {ElementBase} from '../base/element-base';
import {ClassAttributes, HTMLAttributes} from 'react';

const ELEMENT_NAME = 'start-screen';
/*
  const EVENT_ONE = 'event-1'
  interface EventOneProp {}
*/

@customElement(ELEMENT_NAME)
export class StartScreen extends ElementBase {
  static styles = css`
    .start-screen-wrap {
      height: 100%;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  `;

  render() {
    return html`
      <div class="start-screen-wrap">
        <slot name="img"></slot>
      </div>
      <slot></slot>
    `;
  }
}

declare global {
  namespace CStartScreen {
    interface Ref extends CElementBase.Ref<any, any>, StartScreenAttr {}
    type Key = keyof Omit<
      CStartScreen.Ref,
      | keyof HTMLAttributes<CStartScreen.Ref>
      | keyof ClassAttributes<CStartScreen.Ref>
    >;
    /*
      interface Event {
        [EVENT_ONE]: CustomEvent<EventOneProp>
      }
      interface EventOne extends CustomEvent<EventOneProp> {}
    */
  }
  namespace JSX {
    interface IntrinsicElements {
      [ELEMENT_NAME]: CStartScreen.Ref;
    }
  }
}
