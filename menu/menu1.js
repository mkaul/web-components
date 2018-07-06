// simple menu using slots
//
// usage via HTML Custom Element <simple-menu>
// <script type="module" src="menu1.js"></script>
//
// <simple-menu>
//
//     <button slot="item">Menu item A</button>
//     <button slot="item">Menu item B</button>
//     <button slot="item">Menu item C</button>
//
//     <section slot="content">Content of Menu item A.</section>
//     <section slot="content">Content of Menu item B.</section>
//     <section slot="content">Content of Menu item C.</section>
//
// </simple-menu>
//
customElements.define( 'simple-menu', class extends HTMLElement {
  constructor () {
    super();
    this.shadow = this.attachShadow( { mode: 'open' } );
    this.shadow.innerHTML = `
      <style>
          ::slotted([slot="item"]) {
            cursor: pointer;
          }
      </style>
      <slot name="item"></slot>
      <slot name="content"></slot>
    `;
  }
  connectedCallback() {
    // get all nodes assigned to slots
    this.items = this.shadowRoot.querySelector('[name="item"]').assignedNodes({flatten: true});
    this.contents = this.shadowRoot.querySelector('[name="content"]').assignedNodes({flatten: true});

    // bind event listener to this Custom Element
    this.items.forEach( item => item.addEventListener( 'click', this.hideContent.bind(this) ) );

    this.hideContent();
  }
  hideContent(e) {
    this.contents.forEach( content => content.style.display = 'none' );
    if(e){
      // get index of clicked menu item
      const index = this.items.indexOf(e.currentTarget);
      // display content with selected index
      this.contents[ index ].style.display = 'block';
    }
  }
} );