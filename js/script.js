//
// Fabian Barquero's Movie proyect (API) 🎥
//

function addMovies(movies) {
  const movieList = document.getElementById ('movie_list');
  movie_list.innerHTML = '';

  const tooltip = document.getElementById ('tooltip') 

  for (let i = 0; movies.length; i += 1) {
    let listItem = document.createElement ('li');
    movieList.appendChild(listItem);

    let tooltip_content = document.createElement ('div');
    tooltip.appendChild(tooltip_content);

    //Poster
    let poster = document.createElement ('img');
    poster.setAttribute ('src', movies[i].Poster);
    listItem.appendChild (poster);

    /*// Movie title
    let title = document.createElement ('h2');
    title.innerHTML = movies[i].Title;
    tooltip.appendChild (title);
  
    // Movie year
    let movieYear = document.createElement ('h3');
    movieYear.innerHTML = movies[i].Year;
    tooltip.appendChild (movieYear);
    
    // Runtime
    const runtime = document.createElement ('h4');
    runtime.innerHTML = movies[i].Runtime;
    tooltip_content.appendChild (runtime);

    // Movie Actors
    const actors = document.createElement ('p');
    actors.innerHTML = movies[i].Actors;
    tooltip_content.appendChild (actors);

    //Metascore
    const metascore = document.createElement ('p');
    metascore.innerHTML = movies[i].Metascore;
    tooltip_content.appendChild (metascore);*/
  }
};

const movie_form = document.getElementById ('form');
movie_form.addEventListener ('submit',(event) => {
  event.preventDefault();
  const movie_search = movie_form.elements[0].value;

    // Fetch
  fetch(`http://www.omdbapi.com/?apikey=4f567dc7&s=${movie_search}`)
    .then((response) => response.json())
    .then((data) => {
      addMovies (data.Search);
    });
});

// Load More buttom

const nextPage = '';
let count = 1;
const loadMore = document.getElementById ('load_more');

// http://www.omdbapi.com/?i=tt3896198&apikey=4f567dc7 --> original link (guardians of galaxy Vol.2) 

loadMore.addEventListener ('click', (event) => {
  event.preventDefault ();
  const searching = search.element[0].value;
  fetch(`http://www.omdbapi.com/?apikey=4f567dc7&s=${searching}&page=${count}`)
    .then((response) => response.json())
    .then((data) => {
      addMovies (data.Search);
      count++;
    });
});

fetch(`http://www.omdbapi.com/?apikey=4f567dc7&i=${searching}&page=${count}`)
.then((response) => response.json())
.then((data) => {
  addMovies (data.Search);
  addMovies (data.Runtime);
  addMovies (data.Actors);
  addMovies (data.Metascore);
});
