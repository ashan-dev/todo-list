import React, { useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { connect } from "react-redux";
import { AuthContext } from "../../Auth";
import { handleLogin } from "./Login.js"
import {loginAction} from "../../redux/actions/user-action";

const Login = ({ history, login, loggedInUserData }) => {
  if(loggedInUserData && Object.keys(loggedInUserData).length > 0){
    return <Redirect to="/" />;
  }else{
    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={(event) => {
              handleLogin(event, history, login);
        }}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  loggedInUserData : state.userState.userData
})

const mapDispatchToProps = (dispatch) => ({
  login: (loginData, callback) => dispatch(loginAction(loginData, callback))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));