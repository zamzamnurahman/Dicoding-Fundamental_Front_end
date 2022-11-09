class CardItem extends HTMLElement {
  constructor(title, author, desc, create, urlImg, url) {
    super();
    this.title = title;
    this.author = author;
    this.desc = desc;
    this.create = create;
    this.urlImg = urlImg;
    this.url = url;
    this.ShadowDom = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  getDate(d) {
    var date = new Date(d);
    date = date.toDateString();
    return date;
  }

  render() {
    this.ShadowDom.innerHTML = `
<style>
.card-berita{

  margin: 10px;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 2px 2px 3px grey;
  transition: 0.5s;
  overflow : hidden;

}

.card-berita:hover {
  scale: 1.1;
  cursor: pointer;

}

.img img{
  height : 100%;

}

.bg {
  display: flex;
  justify-content: end;
  flex-direction: column;
  border-radius: 10px;
  padding: 40% 10px 10px 10px;
  background-color: rgba(0, 0, 0, 0.410);
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
a,a:hover{
  text-decoration : none;
}

.title{
  font-size : 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.description {
  font-size: 14px;
  line-height: 17px;
  margin: 5px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.createdAt {
  font-size: 10px;
}
</style>

<a href="${this.url ?? "/"}">
<div class="card-berita" style="background: url('${this.urlImg ?? "https://th.bing.com/th/id/OIP.2cxR1aDg_FkohtgrQBnldwHaEK?pid=ImgDet&rs=1"}') no-repeat; background-size : cover; ">
<div class="bg">
<div class="title">
<h4>${this.title ?? "Judul ini ini judul beritanya guys ya safsajhf ashfhsakfhaslkf kasfk sakflkashf sakf"}</h4>
</div>
  <div class="author">
    <p>Penulis : <strong>${this.author ?? "Author"}</strong></p>
  </div>
  <div class="description">
    <p>${this.desc ?? "Cari berita trending di seluruh Dunia dengan mencari kata kunci tentang berita yang ingin dicari dfsdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa kdsfnkdsf kdslflksjd fsdfjlksdjflkjslkdfjlksd fkjdsfjdslk "}</p>
  </div>
  <div class="createdAt">
    <p>${this.getDate(this.create)}</p>
  </div>
</div>
</a>

</div>
`


  }
}

customElements.define('card-item', CardItem);

export default CardItem;