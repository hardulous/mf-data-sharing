import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import { Provider } from "react-redux";
import store from "./rtk/store.js";

const CakeApp = lazy(() => import("./components/CakeMF.jsx"));
const IceCreamApp = lazy(() => import("./components/IceCreamMF.jsx"));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cake" component={CakeApp} />
            <Route exact path="/icecream" component={IceCreamApp} />
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
