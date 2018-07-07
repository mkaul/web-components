/**
 * @overview simple menu with json input for menu structure
 * @author Manfred Kaul <manfred.kaul@h-brs.de> 2018
 * @license The MIT License (MIT)
 * @version latest (0.0.1)
 *
 * simple menu using json input on attribute in Custom Element
 *
 * @usage via HTML Custom Element <json-menu>
 * <script type="module" src="json-menu.js"></script>
 *
 * <json-menu menu='{"Menu item A":"Content of Menu item A.", "Menu item B": "Content of Menu item B.", "Menu item C": "Content of Menu item C."}'></json-menu>
 *
 **/
customElements.define( 'json-menu', class extends HTMLElement {
  // static get observedAttributes(){ console.log( "This is never called;" );  return ['menu'] }
  constructor () {
    super();
    this.shadow = this.attachShadow( { mode: 'open' } );
  }
  connectedCallback() {
    const menu = JSON.parse( this.getAttribute('menu') );
    this.items = [];
    this.contents = [];
    Object.keys(menu).forEach( item => {
      const button = document.createElement('button');
      button.innerHTML = item;
      button.addEventListener( 'click', this.hideContent.bind(this) );
      this.items.push(button);
      this.shadow.appendChild(button);
    });
    Object.values(menu).forEach( content => {
      const section = document.createElement('section');
      section.innerHTML = content;
      this.contents.push(section);
      this.shadow.appendChild(section);
    });

    this.hideContent();
  }
  /**
   * hide all contents except the one that has been clicked
   * @param {Event} event - click
   */
  hideContent(event) {
    this.contents.forEach( content => content.style.display = 'none' );
    if(event){
      // get index of clicked menu item
      const index = this.items.indexOf(event.currentTarget);
      // display content with selected index
      this.contents[ index ].style.display = 'block';
    }
  }
} );
