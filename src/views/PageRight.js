import React, { useState } from "react";
import axios from "axios";

const PageRight = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  return (
    <div id="page_right">
      <div className="filter_panel">
        <form
          id="search_form"
          onSubmit={async (e) => {
            e.preventDefault();
            if (name) {
              const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${name}`
              );
              console.log(response);
            } else if (type) {
              const response = await axios.get(
                `https://pokeapi.co/api/v2/type/${type}`
              );
              console.log(response);
            } else {
              console.log("type in pokemon name");
            }
          }}
        >
          <div id="shared">
            <input
              type="text"
              placeholder="Quick Search"
              id="poke_name"
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
            <option value="grass">Grass</option>
            <option value="fire">Fire</option>
          </select>
        </form>
      </div>
      <div id="results">
        <div class="navigation">
          <div class="id sort">
            Id<button className="sort_btn">▼</button>
          </div>
          <div class="name sort">
            Name <button className="sort_btn">▼</button>
          </div>
          <div class="type sort">
            Type <button className="sort_btn">▼</button>
          </div>
          <div class="weight sort">
            Weight <button className="sort_btn">▼</button>
          </div>
        </div>
        <div className="records">
          <div className="record">
            <div className="id rec">32</div>
            <div className="name rec">Bulbasaur</div>
            <div className="type rec">Grass</div>
            <div className="weight rec">123</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageRight;
