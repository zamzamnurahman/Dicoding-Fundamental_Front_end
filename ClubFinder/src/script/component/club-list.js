import "./club-item.js";

class ClubList extends HTMLElement {
  constructor() {
    super();
    this.ShadowDOM = this.attachShadow({ mode: "open" });
  }

  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }

  render() {
    this.ShadowDOM.innerHTML = "";
    this._clubs.forEach((club) => {
      const clubItemElement = document.createElement("club-item");
      clubItemElement.club = club;
      this.ShadowDOM.appendChild(clubItemElement);
    });
  }
  renderError(message) {
    this.ShadowDOM.innerHTML = `
    <style>
    .placeholder {
      font-weight: lighter;
      color: rgba(0, 0, 0, 0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    </style>
    `;
    this.ShadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("club-list", ClubList);
