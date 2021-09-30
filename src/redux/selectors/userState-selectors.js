const getUserState = (state) => state.userState;

export const getUserProfile = (state) => {
  const { name, image, email } = getUserState(state);
  return { name, image, email };
};
