import React from "react";
import { Row, Col } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import { logOutAction } from "../../redux/actions/user-action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = ({ logOut }) => {
  return (
    <Row className={styles.topRowContainer}>
      <Col xs={{ span: 1, offset: 11 }} className={styles.rightContainer}>
        <div
          className={styles.logoutContainer}
          onClick={() =>
            logOut(() => {
              return <Redirect to="/" />;
            })
          }
        >
          <FiLogOut className={styles.logOutIcon} />
          <p className={styles.logoutText}>Log Out</p>
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  logOut: (callback) => dispatch(logOutAction(callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
