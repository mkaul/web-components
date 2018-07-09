/**
 * @overview survey
 * @author Manfred Kaul <manfred.kaul@h-brs.de> 2018
 * @license The MIT License (MIT)
 * @version latest (0.0.1)
 *
 * @usage via HTML Custom Element <survey>
 *
 **/
customElements.define( 'simple-survey', class extends HTMLElement {
  constructor () {
    super();
    // type="radio" name="category" min-value="1" max-value="5"
    const type      = this.getAttribute('type');
    const name      = this.getAttribute('name');
    this.min_value = parseInt(this.getAttribute('min-value'));
    const max_value = parseInt(this.getAttribute('max-value'));
    this.data      = JSON.parse(this.getAttribute('data'));

    for (let i=this.min_value;i<=max_value;i++){
      const label = document.createElement('label');
      label.style = 'display: block;';
      label.innerHTML = `
        ${i}
        <input type="${type}" name="${name}" value="${i}">
        <div style="display: inline-block; height: 1em; width: ${this.result_value(i)}vw; background-color: lightblue; border: thin solid black"></div>
      `;
      this.appendChild(label);
    }
  }
  result_value( index ){
    return this.data[ index - this.min_value ];
  }
} );