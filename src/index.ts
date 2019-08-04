var {LitElement, html, css} = require('@polymer/lit-element');

class TodoApp extends LitElement {
 
  render() {
 
    return html`
    <p>hello todo app</p>
 
     
    `;
  }
}

customElements.define('todo-app', TodoApp)