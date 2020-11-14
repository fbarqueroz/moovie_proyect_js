//
// Fabian Barquero's Movie proyect (API) 🎥
//

function addMovies(movies) {
  const movieList = document.getElementById ('movie_list');
  movie_list.innerHTML = '';
  windows.scroll (0,0);

  for (let i = 0; movies.length; i += 1) {
    let listItem = document.createElement ('li');
    movieList.appendChild(listItem);

  // Movie title
    let title = document.createElement ('h2');
    title.innerHTML = movies[i].Title;
    listItem.appendChild (title);

    // Movie year
    let movieYear = document.createElement ('h3');
    movieYear.innerHTML = movies[i].Year;
    listItem.appendChild (movieYear);
    
    // Runtime
    const runtime = document.createElement ('h4');
    runtime.innerHTML = movies[i].Runtime;
    listItem.appendChild (runtime);

    // Movie Actors
    const actors = document.createElement ('p');
    actors.innerHTML = movies[i].Actors;
    listItem.appendChild (actors);

    //Metascore
    const metascore = document.createElement ('p');
    metascore.innerHTML = movies[i].Metascore;
    listItem.appendChild (metascore);
  }
}

const movie_form = document.getElementById ('form');
movie_form.addEventListener ('submit',(event) => {
  event.preventDefault;
  const movie_search = movie_form.element[0].value;

   // Fetch
  fetch(`http://www.omdbapi.com/?apikey=4f567dc7&s=${movie_search}`)
    .then((response) => response.json())
    .then((data) => {
      addMovies (data.Search);
    });
});