import "./style/style.css";
import "./components/hero-title";
import "./components/form-search";
import api from "./services/service";

const searchForm = document.querySelector('form');
const search = document.getElementById('search')
const view = document.querySelector('main');

searchForm.onsubmit = (e) => {
  e.preventDefault();

  if (search.value) {
    api.search(search.value).then((res) => {
      const data = res.data.articles;
      data.forEach(element => {
        const author = document.createElement('p');
        author.innerHTML = `<p>author : ${element.author}</p>`;

        view.appendChild(author);
      });
    })
  }
}
