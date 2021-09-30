import React, { Suspense } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import AppRoutes from "./App-routes";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";

const SideBar = React.lazy(() => import("./components/SideBar/SideBar.jsx"));
const Navbar = React.lazy(() => import("./components/NavBar/NavBar.jsx"));
const Login = React.lazy(() => import("./containers/Login/Login.jsx"));

const App = ({ isUserLoggedIn }) => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        {!isUserLoggedIn ? (
          <Route path="/" component={Login} />
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
      </Suspense>
    </>
  );
};

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.userState.isLoginSuccess,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
