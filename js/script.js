//
// Fabian Barquero's Movie proyect (API) 🎥
//

function addMovies(movies) {
  const movieList = document.getElementById ('movie_list');
  movie_list.innerHTML = '';
  window.scroll (0,0);

  //const tooltip = document.getElementById ('tooltip') 

  for (let i = 0; movies.length; i += 1) {
    let listItem = document.createElement ('li');
    movieList.appendChild(listItem);

    // Fetch
    fetch(`http://www.omdbapi.com/?apikey=4f567dc7&i=${movies[i].imdbID}`)
      .then((response) => response.json())
      .then((data) => {
        const movie_description = `
        <div class="movie_description">
          <li><p>${movies[i].Title}</p></li>
          <li><img src="${movies[i].Poster}" alt="movies.Title" class="clearfix"></li>
          <!--Modal-->
          <div class="modal">
          <button id="myBtn">More Details</button>
              <div id="myModal" class="modal">
                  <div class="modal-content">
                      <span class="close">&times;</span>
                      <li><p>Year: ${movies[i].Year}</p></li>
                      <li><p>Runtime: ${data.Runtime}</p></li>
                      <li><p>Actors: ${data.Actors}</p></li>
                      <li><p>Metascore: ${data.Metascore}</p></li>
                  </div>
              </div>
          </div>
        </div>
          `;
        listItem.innerHTML = movie_description;

        // Get the modal
        let modal = document.getElementById("myModal");

        // Get the button that opens the modal
        let btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
          modal.style.display = "block";
          }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
    });

    /*//Poster
    let poster = document.createElement ('img');
    poster.setAttribute ('src',movies[i].Poster);
    listItem.appendChild (poster);

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
    listItem.appendChild (metascore);*/

    
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
  count ++;
  fetch(`http://www.omdbapi.com/?apikey=4f567dc7&s=${searching}&page=${count}`)
    .then((response) => response.json())
    .then((data) => {
      addMovies (data.Search);
    });

    fetch(`http://www.omdbapi.com/?apikey=4f567dc7&i=${searching}&page=${count}`)
  .then((response) => response.json())
  .then((data) => {
    addMovies (data.Search);
    addMovies (data.Runtime);
    addMovies (data.Actors);
    addMovies (data.Metascore);
  });
});

