class ParImparLista extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '/style/main.css');

    this.container = document.createElement('div');

    this.shadowRoot.append(link, this.container);
  }

  connectedCallback() {
    window.addEventListener('rango-seleccionado', (event) => {
      const { inicio, fin } = event.detail;
      this.mostrarLista(inicio, fin);
    });
  }

  mostrarLista(inicio, fin) {
    const lista = document.createElement('ul');
    for (let i = inicio; i <= fin; i++) {
      const item = document.createElement('li');
      item.textContent = `${i} - ${i % 2 === 0 ? 'Par' : 'Impar'}`;
      lista.appendChild(item);
    }
    this.container.innerHTML = '';
    this.container.appendChild(lista);
  }
}

customElements.define('par-impar-lista', ParImparLista);

