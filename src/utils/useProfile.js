import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/selectors/userState-selectors";
import { saveProfileAction } from "../redux/actions/user-action";

export default () => {
  const fileRef = useRef();
  const dispatch = useDispatch();
  const {
    name: Name,
    email: Email,
    image: Image,
  } = useSelector(getUserProfile);

  const [name, setName] = useState(Name);
  const [email, setEmail] = useState(Email);
  const [image, setImage] = useState(Image);

  const onChange = (setText) => (e) => {
    setText(e.target.value);
  };

  const onNameChangeHandler = onChange(setName);
  const onEmailChangeHandler = onChange(setEmail);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onFileChangeHandler = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
  };

  const selectImage = () => {
    if (fileRef.current != undefined && fileRef.current.click != undefined)
      fileRef.current.click();
  };

  const saveProfile = () => {
    if (name && email && image) {
      dispatch(saveProfileAction({ name, email, image }));
      alert("User updated successfully");
    } else {
      alert("name, email and image required");
    }
  };

  return {
    name,
    email,
    image,
    selectImage,
    onNameChangeHandler,
    onEmailChangeHandler,
    fileRef,
    onFileChangeHandler,
    saveProfile,
  };
};
