let apiKey = "ca040df05c2de2de7a69a04ae6204d99";
let requestToken: string;
let username: string;
let password: string;
let sessionId: string;
let listId = '7101979';

let loginButton = document.getElementById('login-button') as HTMLButtonElement;
let searchButton = document.getElementById('search-button') as HTMLButtonElement;
let searchContainer = document.getElementById('search-container') as HTMLElement;

searchButton.addEventListener('click', async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }
  let query = (document.getElementById('search') as HTMLInputElement).value;
  let listaDeFilmes = await procurarFilme(query);
  let ul = document.createElement('ul');
  ul.id = "lista"

  for (const item of listaDeFilmes.results) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item.original_title))
    ul.appendChild(li)
    }

  console.log(listaDeFilmes);
  searchContainer.appendChild(ul);
})

class HttpClient {
    static async get({url, method, body = null}) {
      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open(method, url, true);
  
        request.onload = () => {
          if (request.status >= 200 && request.status < 300) {
            resolve(JSON.parse(request.responseText));
          } else {
            reject({
              status: request.status,
              statusText: request.statusText
            })
          }
        }
        request.onerror = () => {
          reject({
            status: request.status,
            statusText: request.statusText
          })
        }
  
        if (body) {
          request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          body = JSON.stringify(body);
        }
        request.send(body);
      })
    }
  }

async function procurarFilme(query: string) {
  query = encodeURI(query)
  console.log(query)
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`, // Ex. para o filme "Hustle": https://api.themoviedb.org/3/search/movie?api_key=ca040df05c2de2de7a69a04ae6204d99&query=Hustle
    method: "GET"
  })
  return result
}