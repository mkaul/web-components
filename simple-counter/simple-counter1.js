/**
 * @overview simple counter
 * @author Manfred Kaul <manfred.kaul@h-brs.de> 2018
 * @license The MIT License (MIT)
 * @version latest (0.0.1)
 *
 * @usage via HTML Custom Element <simple-counter>
 *
 **/
customElements.define( 'simple-counter', class extends HTMLElement {
  constructor () {
    super();
    let counter = 0;
    this.innerHTML = counter;
    this.addEventListener( 'click', () => this.innerHTML = ++counter );
  }
} );