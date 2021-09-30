import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import useProfile from "../../utils/useProfile";
import defaultProfilePic from "../../assets/profile.png";
import styles from "./Profile.module.scss";

const Profile = () => {
  const {
    name,
    email,
    image,
    selectImage,
    onNameChangeHandler,
    onEmailChangeHandler,
    onImageChangeHandler,
    fileRef,
    onFileChangeHandler,
    saveProfile,
  } = useProfile();

  return (
    <Container className={styles.mainContainer}>
      <p className={styles.title}>User Profile</p>
      <Row>
        <img
          className={styles.userImage}
          
          src={image || defaultProfilePic}
          onClick={selectImage}
        />
        <input
          id="selectImage"
          hidden
          type="file"
          accept=".jpeg, .png, .jpg"
          ref={fileRef}
          onChange={onFileChangeHandler}
        />
      </Row>
      <br />
      <div>
        <input
          className={styles.inputField}
          placeholder="Enter your name"
          type="text"
          value={name}
          onChange={onNameChangeHandler}
        />
      </div>
      <div>
        <input
          className={styles.inputField}
          placeholder="Enter your email"
          name="email"
          type="text"
          value={email}
          onChange={onEmailChangeHandler}
        />
      </div>

      <Button type="submit" className={styles.saveBtnContainer} onClick={saveProfile}>
        Save
      </Button>
    </Container>
  );
};

export default Profile;
