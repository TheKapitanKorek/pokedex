import React from "react";
import Hinges from "../components/Hinges";
import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "../components/HeaderRight";
import PageLeft from "./PageLeft";
import PageRight from "./PageRight";

const Pokedex = () => {
  return (
    <div id="pokedex">
      <div className="left side">
        <HeaderLeft />
        <PageLeft />
      </div>
      <div className="middle_bar">
        <Hinges />
      </div>
      <div className="right side">
        <HeaderRight />
        <PageRight />
      </div>
    </div>
  );
};
export default Pokedex;
