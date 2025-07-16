class InputRange extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '../style/main.css');

    const template = document.createElement('div');
    template.innerHTML = `
      <label>Inicio: <input type="number" id="inicio" /></label>
      <label>Fin: <input type="number" id="fin" /></label>
      <button id="enviar">Verificar</button>
    `;

    this.shadowRoot.append(link, template);
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#enviar').addEventListener('click', () => {
      const inicio = parseInt(this.shadowRoot.querySelector('#inicio').value);
      const fin = parseInt(this.shadowRoot.querySelector('#fin').value);

      if (isNaN(inicio) || isNaN(fin) || inicio > fin) {
        alert("Ingrese números válidos y asegúrese de que Inicio <= Fin.");
        return;
      }

      this.dispatchEvent(new CustomEvent('rango-seleccionado', {
        detail: { inicio, fin },
        bubbles: true,
        composed: true
      }));
    });
  }
}

customElements.define('input-range', InputRange);

