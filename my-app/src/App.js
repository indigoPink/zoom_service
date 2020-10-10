import React from "react";
import Welcome from "./pages/welcome.js";
import ProcessSelect from "./pages/process_select";
import IdeationSetting from "./pages/ideation";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import queryString from "query-string";

const App = () => {
  // return <NewsList />;
  // return <Welcome />;
  // return <ProcessSelect />;
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/:name" component={ProcessSelect} />
          <Route path="/:name/ideation" component={IdeationSetting} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
