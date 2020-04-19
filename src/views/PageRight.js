import React, { useState } from "react";
import axios from "axios";

const PageRight = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [pokeList, setPokeList] = useState([]);

  const setPokemon = async (pokeName) => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );
    const pokemon = {
      name: data.name,
      image: data.sprites.front_default,
      weight: data.weight,
      stats: data.stats,
      abilities: data.abilities,
    };
    props.loadPokemon(pokemon);
  };

  const renderRecord = (item) => {
    return (
      <div className="record">
        <button
          className="name rec"
          id={item.pokemon.name}
          onClick={async (e) => {
            setPokemon(e.target.id);
          }}
        >
          {item.pokemon.name}
        </button>
      </div>
    );
  };

  const createRecordList = (arr) => {
    return arr.map((el) => {
      return renderRecord(el);
    });
  };

  return (
    <div id="page_right">
      <div className="filter_panel">
        <form
          id="search_form"
          onSubmit={async (e) => {
            e.preventDefault();
            if (name) {
              setPokemon(name);
            } else if (type) {
              const response = await axios.get(
                `https://pokeapi.co/api/v2/type/${type}`
              );
              const pokemons = response.data.pokemon;
              setPokeList(pokemons);
            }
            setName("");
          }}
        >
          <div id="shared">
            <input
              type="text"
              placeholder="Quick Search"
              id="poke_name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button for="search_form" id="search_button">
              Search
            </button>
          </div>
          <select
            id="poke_types"
            name="type"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Fyling</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
            <option value="unknown">Unknown</option>
            <option value="shadow">Shadow</option>
          </select>
        </form>
      </div>
      <div id="results">
        <div class="navigation">
          <div class="name sort">
            Name <button className="sort_btn">▼</button>
          </div>
        </div>
        <div className="records">{createRecordList(pokeList)}</div>
      </div>
    </div>
  );
};

export default PageRight;
