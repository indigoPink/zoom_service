import React from "react";
import Welcome from "./pages/welcome.js";
import ProcessSelect from "./pages/process_select";
import IdeationSetting from "./pages/ideation";
import RoomSetting from "./pages/roomSetting";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import queryString from "query-string";

const App = ({ location, match }) => {
  // return <NewsList />;
  // return <Welcome />;
  // return <ProcessSelect />;
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/roomsetting" component={RoomSetting} />
          <Route path="/" component={Welcome} exact />
          <Route path="/:name/ideation" component={IdeationSetting} exact />
          <Route path="/:name" component={ProcessSelect} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
