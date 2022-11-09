class FormSearch extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {

    this.innerHTML = `
    <style>
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      width: 50%;
      margin: 10px auto;
    }
    
    input {
      margin: 0 10px;
      border: none;
      border-radius : 10px;
      padding: 10px 20px
    }

    #search{
      background-color: grey;
      transition: .3s;
    }
    #search:hover{
      box-shadow : 2px 2px 5px grey;
    }
    #search:focus{
      scale : 1.1;
    }
    #search::-webkit-input-placeholder{
      color: white;
    }
    #button{
      transition: .3s;
      background-color: orange;
      color:white;
    }
    #button:hover{
      scale : 1;
      curson:pointer;
      box-shadow : 2px 2px 5px grey;
    }
    </style>

    <form>
    <input type="text" name="search" id="search" placeholder="Silahkan Cari ...">
    <input type="submit" id="button" value="Cari">
  </form>
    `
  }
}

customElements.define('form-search', FormSearch);