import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "../components/sub/Contact";

const ContactRoutes = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.url}`} exact component={Contact} />
    </Switch>
  );
};

export default ContactRoutes;
