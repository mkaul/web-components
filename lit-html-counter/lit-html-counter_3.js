/**
 * @overview description of the component
 * @version 0.0.1
 * @author mkaul2m Manfred.Kaul@h-brs.de
 * @copyright The MIT License (MIT) mkaul2m on 2018-11-11.
 */

import { html, render } from "https://unpkg.com/lit-html?module";

class LitCounter extends HTMLElement {

  // private counterValue and root

  constructor(){
    super();
    let counterValue = parseInt(this.getAttribute('start')) || 0;
    const root = this.attachShadow({mode:"open"} );
    setInterval( () => {
      render( html`<h1>${this.message}: ${counterValue++}</h1>`, root );
    },1000 );
  }

  get message(){
    return this.getAttribute('message');
  }
}

customElements.define('lit-counter', LitCounter );