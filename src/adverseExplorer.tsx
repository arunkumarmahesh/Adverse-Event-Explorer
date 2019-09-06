import React, { FC } from "react";
import { AdverseGrouped } from "./pages/adverseGrouped";
import { AdverseDetails } from "./pages/adverseDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const AdverseExplorer: FC = () => {
  return (
    <Router>
      <Route exact path="/" component={AdverseGrouped} />
      <Route path="/:id" component={AdverseDetails} />
    </Router>
  );
};
