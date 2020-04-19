import React from "react";

const PokePanel = (props) => {
  const renderStats = (stats) => {
    if (stats) {
      const renderedStats = stats.map((el) => {
        return (
          <div className="stat">{`${el.stat.name}:  ${el.base_stat}`}</div>
        );
      });
      return renderedStats;
    }
  };
  const renderAbilities = (abilities) => {
    if (abilities) {
      const renderedAbilities = abilities.map((el) => {
        return <div className="ability">{el.ability.name}</div>;
      });
      return renderedAbilities;
    }
  };
  if (props.name) {
    return (
      <div id="poke_panel">
        <div id="head">
          <div className="nm fifty">{props.name}</div>
          <div className="wg fifty">{`pokemon weight: ${props.weight}`}</div>
        </div>
        <div id="upper_section">
          <div id="position_box">
            <div className="img_box">
              <img
                className="avatar"
                src={
                  props.image
                    ? props.image
                    : "https://tl.vhv.rs/dpng/s/180-1809976_freetoedit-questionmark-question-decamarks-tenquestionmarks-pokemon-question-mark.png"
                }
                alt={props.name ? props.name : "missing"}
              />
            </div>
            <div className="abl_title">abilities</div>
          </div>
          <div id="stats">{renderStats(props.stats)}</div>
        </div>
        <div id="abilities">{renderAbilities(props.abilities)}</div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default PokePanel;
