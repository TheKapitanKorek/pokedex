import React, { useState } from "react";
import Hinges from "../components/Hinges";
import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "../components/HeaderRight";
import PageLeft from "./PageLeft";
import PageRight from "./PageRight";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState("off");

  return (
    <div id="pokedex">
      <div className="left side">
        <HeaderLeft loading={loading} />
        <PageLeft {...pokemon} />
      </div>
      <div className="middle_bar">
        <Hinges />
      </div>
      <div className="right side">
        <HeaderRight />
        <PageRight loadingSwitch={setLoading} loadPokemon={setPokemon} />
      </div>
    </div>
  );
};
export default Pokedex;
