import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../components/sub/About";
import Team from "../components/sub/Team";

const AboutRoutes = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.url}`} exact component={About} />
      <Route path={`${match.url}/team`} exact component={Team} />
    </Switch>
  );
};

export default AboutRoutes;
