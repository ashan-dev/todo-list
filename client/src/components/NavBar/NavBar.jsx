import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import firebase from "../../firebase";
import { FiLogOut } from "react-icons/fi";
import { logOutAction } from "../../redux/actions/user-action";
import { connect } from "react-redux";

import styles from "./NavBar.module.scss";

const NavBar = ({ logOut, history }) => {
  return (
    <Row className={styles.topRowContainer}>
      <Col xs={{ span: 1, offset: 11 }} className={styles.rightContainer}>
        <div
          className={styles.logoutContainer}
          onClick={() =>
            logOut(() => {
              history.push("/login");
            })
          }
        >
          <span>
            <FiLogOut />
          </span>
          <p>Log Out</p>
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logOut: (callback) => dispatch(logOutAction(callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
