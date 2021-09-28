import React, { useEffect } from "react";
import Home from "./containers/Home/Home.jsx";
import Profile from "./containers/Profile/Profile.jsx";
import { Route, useHistory } from "react-router-dom";


const AppRoutes = ({
  permissions,
  apartmentComplexesLoad,
  userData,
  isLoginSuccess,

}) => {
  const history = useHistory();

  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      
    </React.Fragment>
  );
};

export default AppRoutes;
