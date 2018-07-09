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
    let counter = 1;
    this.shadow = this.attachShadow( { mode: 'open' } );
    this.shadow.innerHTML = '🎈'.repeat(counter);
    this.addEventListener( 'click', () => {
      counter += 1;
      this.shadow.innerHTML = '🎈'.repeat(counter);
    } );
  }
} );