import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { handleLogin } from "./Login.js";
import { loginAction } from "../../redux/actions/user-action";
import styles from "./Login.module.scss";

const Login = ({ login, loggedInUserData }) => {
  const history = useHistory()
  if (loggedInUserData && Object.keys(loggedInUserData).length > 0) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <p className={styles.title}>To-do List</p>

          <form
            className={styles.loginFormContainer}
            onSubmit={(event) => {
              handleLogin(event, history, login);
            }}
          >
            <div>
              <input className={styles.inputField} name="email" type="email" placeholder="Email" />
            </div>
            <div>
              <input className={styles.inputField} name="password" type="password" placeholder="Password" />
            </div>
            <button className={styles.loginBtnContainer} type="submit">Log in</button>
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  loggedInUserData: state.userState.userData,
});

const mapDispatchToProps = (dispatch) => ({
  login: (loginData, callback) => dispatch(loginAction(loginData, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
