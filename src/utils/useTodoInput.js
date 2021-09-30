import { useState } from "react";
import { useDispatch } from "react-redux";

export default ({ initialText = "", action, onSubmit = () => Void }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(initialText);

  const onSubmitHandler = () => {
    if (text) {
      dispatch(action(text));
    }
    onSubmit();
  };

  const onKeyUpHandler = (e) => {
    const text = e.target.value.trim();

    if (e.key === "Enter" && text) {
      setText(text);
      onSubmitHandler();
    }
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return { text, setText, onChangeHandler, onKeyUpHandler, onSubmitHandler };
};
