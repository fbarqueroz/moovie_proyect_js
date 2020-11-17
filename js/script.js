//
// Fabian Barquero's Movie proyect (API) 🎥
//

/* eslint-disable no-plusplus */

function addMovies(movies) {
  const movieList = document.getElementById('movie_list');
  movieList.innerHTML = '';
  window.scroll(0, 0);

  for (let i = 0; movies.length; i += 1) {
    const listItem = document.createElement('li');
    movieList.appendChild(listItem);

    // Fetch
    fetch(`http://www.omdbapi.com/?apikey=4f567dc7&i=${movies[i].imdbID}`)
      .then((response) => response.json())
      .then((data) => {
        const movieDescription = `
        <div class="movie_description">
          <img src="${movies[i].Poster}" alt="movies.Title" class="clearfix">
          <p>${movies[i].Title}</p>
          <p>Year: ${movies[i].Year}</p>
          <p>Runtime: ${data.Runtime}</p>
          <p>Actors: ${data.Actors}</p>
          <p>Metascore: ${data.Metascore}</p>
          <p>Plot: ${data.Plot}</p>
          <!--Modal-->
        </div>
          `;
        listItem.innerHTML = movieDescription;
      });
  }
}
const movieForm = document.getElementById('form');
movieForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const movieSearch = movieForm.elements[0].value;

  // Fetch
  fetch(`http://www.omdbapi.com/?apikey=4f567dc7&s=${movieSearch}`)
    .then((response) => response.json())
    .then((data) => {
      addMovies(data.Search);
    });
});

// Load More button
let count = 1;
const loadMore = document.getElementById('load_more');
// http://www.omdbapi.com/?i=tt3896198&apikey=4f567dc7 --> original link (guardians of galaxy Vol.2)
loadMore.addEventListener('click', (event) => {
  event.preventDefault();
  const movieSearch = movieForm.elements[0].value;
  count++;
  fetch(`http://www.omdbapi.com/?apikey=4f567dc7&s=${movieSearch}&page=${count}`)
    .then((response) => response.json())
    .then((data) => {
      addMovies(data.Search);
    });

  fetch(`http://www.omdbapi.com/?apikey=4f567dc7&i=${movieSearch}&page=${count}`)
    .then((response) => response.json())
    .then((data) => {
      addMovies(data.Search);
      addMovies(data.Runtime);
      addMovies(data.Actors);
      addMovies(data.Metascore);
    });
});
