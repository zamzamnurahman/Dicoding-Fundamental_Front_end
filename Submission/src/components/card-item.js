class CardItem extends HTMLElement {
  constructor(title, author, desc, create, urlImg, url) {
    super();
    this.title = title;
    this.author = author;
    this.desc = desc;
    this.create = create;
    this.urlImg = urlImg;
    this.url = url;
  }

  connectedCallback() {
    this.render();
  }


  render() {
    this.innerHTML = `
<style>
.card-berita{
  background : url("${this.urlImg}");
  background-size : cover;
  width: 350px;
  height: 300px;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 2px 2px 3px grey;
  transition: 0.5s;
}

.card-berita:hover {
  scale: 1.1;
  cursor: pointer;
}

.bg {
  display: flex;
  justify-content: end;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.210);
  color: white;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}

h4,
p {
  margin: 0;
}

.title h4 {

  line-height: 22px;
}

.description {
  font-size: 14px;
  line-height: 17px;
  margin: 5px 0;
}

.createdAt {
  font-size: 10px;
}
</style>

<a href="${this.url}">
<div class="card-berita">
<div class="bg">
  <div class="title">
    <h4>${this.title}</h4>
  </div>
  <div class="author">
    <p>Penulis : <strong>${this.author}</strong></p>
  </div>
  <div class="description">
    <p>${this.desc}</p>
  </div>
  <div class="createdAt">
    <p>${this.create}</p>
  </div>
</div>
</a>

</div>
`


  }
}

customElements.define('card-item', CardItem);

export default CardItem;