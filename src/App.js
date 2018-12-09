import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import AllPhotosPage from "./Photos/AllPhotosPage";
import SinglePhotoPage from "./Photos/SinglePhotoPage";

const App = props => (
  <Router>
    <Switch>
      <Route exact path={`/photos/:id`} component={SinglePhotoPage} />
      <Route exact path="/photos" component={AllPhotosPage} />
      <Redirect to="/photos" />
    </Switch>
  </Router>
);

export default App;
