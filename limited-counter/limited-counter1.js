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
    let counter = parseInt( this.getAttribute('counter') ) || 1;
    let limit = parseInt( this.getAttribute('limit') ) || 5;
    let character = this.getAttribute('character') || '🎈';

    this.innerHTML = character.repeat(counter);
    this.addEventListener( 'click', () => {
      if ( counter < limit ){
        counter += 1;
        this.innerHTML = character.repeat(counter);
      }
    } );
  }
} );