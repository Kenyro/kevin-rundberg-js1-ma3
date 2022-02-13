const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=fe954aa0570d4e96a204f9c7b145d125";

const resultsContainer = document.querySelector(".results");

async function getRawgAPI() {
  const response = await fetch(url);

  const results = await response.json();

  const final = results.results;

  resultsContainer.innerHTML = "";

  for (let i = 0; i < final.length; i++) {
    if (i === 8) {
      break;
    }

    resultsContainer.innerHTML += `<div class = "result">${final[i].name}</div>`;
    resultsContainer.innerHTML += `<div class = "result">${final[i].rating}</div>`;
  }

  resultsContainer.innerHTML += `<div class = "result">${
    resultsContainer.getElementsByTagName("div").length
  }`;
}

getRawgAPI();
