let searchForm = document.getElementById("searchForm");
let searchText = document.getElementById("searchText");
let searchResult = document.getElementById("searchResult");
let error = false;

searchForm.addEventListener("submit", function (e) {
   e.preventDefault();
   let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText.value}`;
   fetch(url).then((response) => {
      if (response.status == 200) {
         error = false;
         return response.json();
      } else if (response.status == 404) {
         searchResult.innerHTML = `<div class="card-body">
         <h5 class="card-title">Sorry,</h5>
         <p class="card-text my-1">No result found</p>
      </div>`;
         error = true;
         console.log("sorry, no result fount to your query");
      }
   }).then((myData) => {
      searchResultHTML = "";
      let title = searchText.value;
      let badge = "";
      let badgeDef = "";
      let def = "";

      // myData[0].meanings.forEach(element => {

      //    //taking noun and verb
      //    console.log(element.partOfSpeech);
      //    for (let i = 0; i < element.definitions.length; i++) {
      //       const definitions = element.definitions[i].definition;
      //       console.log(i+1, + " " + definitions);
      //    }
      // });

      if (!error) {
         myData[0].meanings.forEach(element => {
            //taking noun and verb
            badge = element.partOfSpeech;;
            def = "";
            for (let i = 0; i < element.definitions.length; i++) {
               if ((i == (element.definitions.length) && i != 3) || i == 3) { break }
               let definitions = element.definitions[i].definition;
               def += `${i + 1}. ${definitions}<br>`;
            }
            searchResultHTML += `<div class="card-body">
                           <h5 class="card-title">${title}</h5>
                           <span class="badge bg-secondary">${badge}</span>
                           <p class="card-text my-1">${def}</p>
                        </div>`;
         });
         searchResult.innerHTML = searchResultHTML;
      }
   });
});