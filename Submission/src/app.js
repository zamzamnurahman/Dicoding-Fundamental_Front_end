import "./style/style.css";
import "./components/hero-title";
import "./components/form-search";
import "./components/card-item";
import api from "./services/service";
import CardItem from "./components/card-item";
import axios from "axios";

const searchForm = document.querySelector('form');
const search = document.getElementById('search')
const view = document.querySelector('main');
const title = document.getElementById("title-berita");

api.trending().then((res) => {
  title.innerHTML = "<h2>Trending Indonesia Terkini</h2> ";
  const data = res.data.articles
  data.forEach(data => {
    const item = new CardItem(data.title, data.author, data.description, data.publishedAt, data.urlToImage, data.url);
    view.appendChild(item)
  })
})


searchForm.onsubmit = (e) => {
  e.preventDefault();

  if (search.value) {
    const key = document.getElementById('pencarian');
    key.innerText = `Pencarian Anda : ${search.value}`
    view.innerHTML = ``;

    api.search(search.value).then((res) => {
      if (res.articles == []) {
        title.innerHTML = "<h2>Berita Pencarian Tidak Ditemukan</h2> ";
      } else {
        title.innerHTML = "<h2>Berita Terkini Sesuai Pencarian</h2> ";
        const data = res.data.articles
        data.forEach(data => {
          const item = new CardItem(data.title, data.author, data.description, data.publishedAt, data.urlToImage, data.url);
          view.appendChild(item)
        })
      }
    }).catch(error => {
      console.log(error);
    })

  }

}


