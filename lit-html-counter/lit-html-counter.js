/**
 * @overview description of the component
 * @version 0.0.1
 * @author mkaul2m Manfred.Kaul@h-brs.de
 * @copyright The MIT License (MIT) mkaul2m on 2018-11-11.
 */

import { html, render } from "https://unpkg.com/lit-html?module";

class LitCounter extends HTMLElement {
  constructor(){
    super();
    this.counterValue = 0;
    this.root = this.attachShadow({mode:"open"} );
    setInterval( _ => this.increaseCounter(),1000 );
  }

  increaseCounter(){
    ++this.counter;
  }

  get counter(){
    return this.counterValue;
  }

  set counter( val ){
    this.counterValue = val;
    render( this.template(), this.root );
  }

  template(){
    return html`
      <h1>${this.message}: ${this.counter}</h1>
    `;
  }

  get message(){
    return this.getAttribute('message');
  }
}

customElements.define('lit-counter', LitCounter );
 
 
