const pokemonCardTpl = (pokemon) => {
  return `
    <div class="card">
      <div class="card-img-top">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
      </div>
      <div class="card-body">
        <h2 class="card-tittle">Имя: ${pokemon.name}</h2>
        <p class="card-text">Вес: ${pokemon.weight}</p>
        <p class="card-text">Рост: ${pokemon.height}</p>
        <p class="card-text">Умения:</p>
        <ul class="list-group">
          ${pokemon.abilities
            .map(
              (ability) =>
                `<li class="list-group-item">${ability.ability.name}</li>`
            )
            .join("")}
        </ul>
      </div>
    </div>`;
};

const refs = {
  cardContainer: document.querySelector(".js-card-container"),
  searchForm: document.querySelector(".js-search-form"),
};

refs.searchForm.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  fetchPokemon(searchQuery)
    .then(renderPocemonCard)
    .catch(onFetchError)
    .finally(() => {
      form.reset();
    });
}

function fetchPokemon(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  return fetch(url).then((response) => response.json());
}

function renderPocemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert("Ой.. такого покемона в нас нема");
}
