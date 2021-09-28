import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./components/SideBar/SideBar.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import { logOutAction } from "./redux/actions/user-action";
import AppRoutes from "./App-routes";
import Login from "./containers/Login/Login.jsx";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";

const App = ({ loggedInUserData }) => {
  return (
    <>
      {Object.keys(loggedInUserData).length === 0 ? (
        <Redirect path="/login" component={Login} />
      ) : (
        <Container fluid>
          <Navbar />
          <Row>
            <Col xs={2} className="sidebar-wrapper">
              <SideBar />
            </Col>
            <Col xs={10} className="page-content-wrapper">
              <AppRoutes />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.toDoListState.taskList,
  loggedInUserData: state.userState.userData,
});
const mapDispatchToProps = (dispatch) => ({
  logOut: (callback) => dispatch(logOutAction(callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
