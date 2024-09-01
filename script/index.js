//my cards
const Charactercard = document.querySelector(".characterContainer");
const searchCard = document.querySelector(".card-searchContainer");
//my buttons
const characterbutton = document.querySelector(".character-button");
const searchbutton = document.querySelector(".search-button");
const logout = document.querySelector(".logout-icon");

let characterId = 1;

//event listner for hämta olika karaäkter och söka efter karaktär
characterbutton.addEventListener("click", () => {
  getCharacter(characterId);
  characterId++;
});

searchbutton.addEventListener("click", () => {
  const searchInput = document.querySelector(".card-search").value;
  searchCharacter(searchInput);
});

logout.addEventListener("click", () => {
  console.log("log out icon clicked");
  window.location.href = "index.html";
});

//funktioner som fetchar karakärer med parametrarna från eventlistners
async function getCharacter(characterId) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/${characterId}/`
    );

    if (!response.ok) {
      throw new Error("Character not found");
    }

    const result = await response.json();
    console.log(result);
    Charactercard.innerHTML = `
  <h1>${result.name}</h1>
    <p>Height: ${result.height} cm</p>
    <p>Mass: ${result.mass} kg</p>
    <p>Birth year: ${result.birth_year}</p>
    <p>Hair color: ${result.hair_color}</p>
`;
  } catch (error) {
    Charactercard.innerHTML = `
  <h1>Character not found</h1>
  `;
    console.log(error);
  }
}
async function searchCharacter(searchInput) {
  console.log(searchInput);
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${searchInput}`
    );

    if (!response.ok) {
      throw new Error("Character not found");
    }

    const result = await response.json();
    console.log(result);

    if (result.results.length > 0) {
      searchCard.innerHTML = `
    <h1>${result.results[0].name}</h1>
    <p>Height: ${result.results[0].height} cm</p>
    <p>Mass: ${result.results[0].mass} kg</p>
    <p>Birth year: ${result.results[0].birth_year}</p>
    <p>Hair color: ${result.results[0].hair_color}</p>
`;
    }
  } catch (error) {
    searchCard.innerHTML = `
  <h1>Character not found</h1>
  `;
    console.log(error);
  }
}

//upg 1

//kort som visar informationen (h1) i html och css -- DONE
//man ska kunna tycka på knappen för att ändra karktär -- DONE
// varje gång man tryker ska siffran ändras -- DONE

//upg2

//ny card med sök fält (inputfält)
//https://swapi.dev/api/people/?search=r2
// <h1>${result.results[0].name}</h1>
//när jag söker efter en karaktär så ska den informationen visas i den andra card

//upg3
//time out - typ en popup som tar en till nästa sida. under tiden sidan redirect m
//jobba styling
