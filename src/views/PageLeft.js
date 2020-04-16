import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Photo from "../components/Photo";

const Page_left = () => {
  return (
    <div id="page_left">
      <div className="screen_panel">
        <div id="screen_left">
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={Photo} />
            </Switch>
          </Router>
        </div>
        <div className="buttons">
          <div className="power">
            <button className="circle"></button>
          </div>
          <button className="switch_button">photo</button>
          <button className="switch_button">info</button>
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
  );
};
export default Page_left;
