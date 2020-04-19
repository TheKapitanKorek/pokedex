import React, { useState } from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import history from "../history";
import power_icon from "../power_icon.svg";

import PokePanel from "../components/PokePanel";

const Page_left = (props) => {
  const [onOff, setOnOff] = useState("on");

  return (
    <Router history={history}>
      <div id="page_left">
        <div className="screen_panel">
          <div id="screen_left">
            <Switch>
              <Route path="/" exact render={() => <PokePanel {...props} />} />
              <Route path="/off" exact render={() => <div id="off" />} />
            </Switch>
          </div>
          <div className="buttons">
            <div className="power">
              <Link to={`/${onOff === "on" ? "off" : ""}`}>
                <button
                  className="circle"
                  onClick={() => {
                    setOnOff(onOff === "on" ? "off" : "on");
                  }}
                >
                  <img className="power_icon" src={power_icon} alt="power" />
                </button>
              </Link>
            </div>
            <button className="switch_button"></button>
            <button className="switch_button"></button>
            <div className="ventilation">
              <div className="row">
                <div className="ventil_hole" />
                <div className="ventil_hole" />
                <div className="ventil_hole" />
                <div className="ventil_hole" />
              </div>
              <div className="row">
                <div className="ventil_hole" />
                <div className="ventil_hole" />
                <div className="ventil_hole" />
                <div className="ventil_hole" />
              </div>
              <div className="row">
                <div className="ventil_hole" />
                <div className="ventil_hole" />
                <div className="ventil_hole" />
                <div className="ventil_hole" />
              </div>
              <div className="row">
                <div className="ventil_hole" />
                <div className="ventil_hole" />
                <div className="ventil_hole" />
                <div className="ventil_hole" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Page_left;
