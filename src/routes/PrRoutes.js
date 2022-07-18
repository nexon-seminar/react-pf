import React from "react";
import { Switch, Route } from "react-router-dom";
import Gallery from "../components/sub/Gallery";
import Youtube from "../components/sub/Youtube";

const PrRoutes = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.url}/gallery`} exact component={Gallery} />
      <Route path={`${match.url}`} exact component={Youtube} />
    </Switch>
  );
};

export default PrRoutes;
