import "./style/style.css";
import "./components/hero-title";
import "./components/form-search";
import "./components/card-item";
import api from "./services/service";
import CardItem from "./components/card-item";

const searchForm = document.querySelector('form');
const search = document.getElementById('search')
const view = document.querySelector('main');


searchForm.onsubmit = (e) => {
  e.preventDefault();

  if (search.value) {
    view.innerHTML = ``;
    api.search(search.value).then((res) => {
      console.log(search.value);
      return res.data.articles
    }).then(data => {
      console.log(data.title);

      // const item = new CardItem(data.title, data.author, data.description, data.publishedAt, data.urlToImage, data.url);
      // view.appendChild(item)
    }).catch(error => {
      console.log(error);

    })
    console.log('suksess getData Berita');

  }

}
