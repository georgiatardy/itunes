let search = document.querySelector("#submit");
let tracks = document.querySelector("#results")


// // ======Clears search to begin a new search when "Search Again" button is clicked==========

clear.addEventListener('click', function () {
  tracks.innerHTML = ' ';
})


// ===============Event lister to begin search when "Search" button is clicked==================

submit.addEventListener('click', function() {

// ====Fetch request from iTunes API to display list of songs from a search===

  fetch(`https://itunes.apple.com/search?term==${input.value}`).then(function(response) {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then(function(data) {
      console.log(data);
      tracks.innerHTML = '';


// =====Loops through API data to retrieve search input======

      let results = data.results;
      for (i = 0; i < results.length; i++) {
        tracks.innerHTML +=
          `<div class="Artist_Bio">
<h3>${results[i].artistName}</h3>
<h4>${results[i].trackName}</h4>
 <img src="${results[i].artworkUrl100}"></img>
<a href="${results[i].trackViewUrl}">Listen to Song</a>
</div>`;
      }
    })
});
