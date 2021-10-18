import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestInventory } from "../actions";
import Layout from "./Layout.jsx";
import Policies from "../pages/Policies.jsx";
import About from "../pages/About.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.js";

function Routes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestInventory());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <Layout {...props}>
            <ScrollToTop />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/policies" component={Policies} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        )}
      />
    </BrowserRouter>
  );
}

export default Routes;
