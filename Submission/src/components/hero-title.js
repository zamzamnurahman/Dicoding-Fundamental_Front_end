class HeroTitle extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    :host {
      width: 50%;
      margin: 10px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    
    h1:hover {
      color: orange;
      cursor : pointer;
    }

    span {
      color: #FD4007;
      font-weight: bold;
    }
    </style>
    
    <div class="hero-title">
    <div class="title">
      <h1>Berita Terkini
      </h1>
    </div>
    <div class="subtitle">
      <p>Cari berita trending di seluruh Dunia dengan mencari kata kunci tentang berita yang ingin dicari</p>
    </div>
  </div>`
  }
}

customElements.define('hero-title', HeroTitle);