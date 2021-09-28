const handleLogin = (event, history, loginAction) => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  try {
    loginAction(
      {
        email: email.value,
        password: password.value,
      },
      () => {
        history.push("/");
      }
    );
  } catch (error) {
    alert(error);
  }
};
export { handleLogin };
