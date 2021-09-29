import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { userUpdateAction } from "../../redux/actions/user-action";
import { connect } from "react-redux";

const Profile = ({ updateUser, loggedInUserData }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <p>User Profile</p>
      <Row>
        <Col>Name : </Col>
        <Col>
          <input
            type="text"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>Email : </Col>
        <Col>
          <input
            name="email"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            onClick={() => {
              let updateUserParams = {};
              if (userName !== "") {
                updateUserParams.displayName = userName;
              }
              if (email !== "") {
                updateUserParams.email = email;
              }

              updateUser(updateUserParams, loggedInUserData.uid, () => {
                alert("User updated successfully");
              });
            }}
          >
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedInUserData: state.userState.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (userData, uid, successCallback) =>
      dispatch(userUpdateAction(userData, uid, successCallback)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
