const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b7d21bb44af1e27256b893737fb76d68&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&dapi_key=b7d21bb44af1e27256b893737fb76d68&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(function(data) {
            console.log(data.results);
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                const div_row = document.createElement('div');
                const div_column = document.createElement('div');
                const image = document.createElement('img');
                const title = document.createElement('h2');

                title.innerHTML = '${element.title}';
                image.src = IMG_PATH + element.poster_path;
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);
                

            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}