import firebase from '../../firebase';

export const RESET_SIGN_IN_STATE = 'RESET_SIGN_IN_STATE';

export const RESET_SIGN_IN_ERROR_STATE = 'RESET_SIGN_IN_ERROR_STATE';

export const SET_FIREBASE_LOGIN_PENDING = 'SET_FIREBASE_LOGIN_PENDING';
export const SET_FIREBASE_LOGIN_SUCCESS = 'SET_FIREBASE_LOGIN_SUCCESS';
export const SET_FIREBASE_LOGIN_ERROR = 'SET_FIREBASE_LOGIN_ERROR';

export const SET_FIREBASE_LOGOUT_PENDING = 'SET_FIREBASE_LOGOUT_PENDING';
export const SET_FIREBASE_LOGOUT_SUCCESS = 'SET_FIREBASE_LOGOUT_SUCCESS';
export const SET_FIREBASE_LOGOUT_ERROR = 'SET_FIREBASE_LOGOUT_ERROR';

export const SET_FIREBASE_UPDATE_USER_PENDING =
  'SET_FIREBASE_UPDATE_USER_PENDING';
export const SET_FIREBASE_UPDATE_USER_SUCCESS =
  'SET_FIREBASE_UPDATE_USER_SUCCESS';
export const SET_FIREBASE_UPDATE_USER_ERROR = 'SET_FIREBASE_UPDATE_USER_ERROR';

const setLoginPending = (isLoginPending) => ({
  type: SET_FIREBASE_LOGIN_PENDING,
  isLoginPending,
});

const setLoginSuccess = (isLoginSuccess, userData) => ({
  type: SET_FIREBASE_LOGIN_SUCCESS,
  isLoginSuccess,
  userData: userData,
});

const setLoginError = (loginError) => ({
  type: SET_FIREBASE_LOGIN_ERROR,
  loginError,
});

const setLogOutPending = (isLogOutPending) => ({
  type: SET_FIREBASE_LOGOUT_PENDING,
  isLogOutPending,
});

const setLogOutSuccess = (isLogOutSuccess) => ({
  type: SET_FIREBASE_LOGOUT_SUCCESS,
  isLogOutSuccess,
});

const setLogOutError = (logOutError) => ({
  type: SET_FIREBASE_LOGOUT_ERROR,
  logOutError,
});

const resetSignInState = () => ({
  type: RESET_SIGN_IN_STATE,
});

const setUserUpdatePending = (isUserUpdatePending) => ({
  type: SET_FIREBASE_UPDATE_USER_PENDING,
  isUserUpdatePending,
});

const setUserUpdateSuccess = (isUserUpdateSuccess, userData) => ({
  type: SET_FIREBASE_UPDATE_USER_SUCCESS,
  isUserUpdateSuccess,
  userData,
});

const setUserUpdateError = (userUpdateError) => ({
  type: SET_FIREBASE_UPDATE_USER_ERROR,
  userUpdateError,
});

export const loginAction = (loginData, onSuccessCallback) => {
  return async (dispatch) => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));
    try {
      const userData = await firebase
        .auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password);
      dispatch(setLoginPending(false));
      dispatch(setLoginSuccess(true, userData.user));
      onSuccessCallback();
    } catch (err) {
      dispatch(setLoginError({ message: 'Network error' }));
      throw err;
    }
  };
};

export const userUpdateAction = (userData, uid, onSuccessCallback) => {
  return async (dispatch) => {
    dispatch(setUserUpdatePending(true));
    dispatch(setUserUpdateSuccess(false));
    dispatch(setUserUpdateError(null));
    try {
      const updatedUserData = await firebase.auth().updateCurrentUser(userData);
      dispatch(setUserUpdatePending(false));
      dispatch(setUserUpdateSuccess(true, updatedUserData.user));
      onSuccessCallback();
    } catch (err) {
      dispatch(setUserUpdateError({ message: 'Network error' }));
      throw err;
    }
  };
};

export const signInErrorResetAction = () => ({
  type: RESET_SIGN_IN_ERROR_STATE,
});

export const logOutAction = (onSuccessCallback) => {
  return async (dispatch) => {
    dispatch(setLogOutPending(true));
    dispatch(setLogOutSuccess(false));
    dispatch(setLogOutError(null));

    try {
      await firebase.auth().signOut();
      dispatch(setLogOutPending(false));
      dispatch(setLogOutSuccess(true));
      onSuccessCallback();
    } catch (err) {
      dispatch(setLogOutError({ message: 'Logout error' }));
      throw err;
    }
  };
};

export const resetSignInStateAction = () => {
  return async (dispatch) => {
    dispatch(resetSignInState());
  };
};
