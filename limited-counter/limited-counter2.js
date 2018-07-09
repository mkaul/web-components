/**
 * @overview limited counter
 * @author Manfred Kaul <manfred.kaul@h-brs.de> 2018
 * @license The MIT License (MIT)
 * @version latest (0.0.1)
 *
 * @usage via HTML Custom Element <limited-counter>
 *
 **/
customElements.define( 'limited-counter', class extends HTMLElement {
  constructor () {
    super();
    // use attributes or default values
    this.counter = parseInt( this.getAttribute('counter') ) || 1;
    this.limit = parseInt( this.getAttribute('limit') ) || 5;
    this.character = this.getAttribute('character') || '🎈';
    this.shadow = this.attachShadow( { mode: 'open' } );
    this.shadow.innerHTML = this.character.repeat(this.counter);
  }
  connectedCallback() {
    this.addEventListener( 'click', this.increment.bind(this) );
  }
  /**
   * increment counter by one
   * @param {Event} event - click
   */
  increment(event) {
    if ( this.counter < this.limit ){
      this.counter += 1;
      this.shadow.innerHTML = this.character.repeat(this.counter);
    }
  }
} );