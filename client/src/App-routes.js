import React, { useEffect } from "react";
import Home from "./containers/Home/Home.jsx";
import Profile from "./containers/Profile/Profile.jsx";
import { Route, useHistory } from "react-router-dom";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => ({
  loggedInUserData: state.userState.userData,
  isUserLoggedIn: state.userState.isLoginSuccess,
});

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);
