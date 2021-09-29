import {
  SET_FIREBASE_LOGIN_PENDING,
  SET_FIREBASE_LOGIN_ERROR,
  SET_FIREBASE_LOGIN_SUCCESS,
  SET_FIREBASE_LOGOUT_ERROR,
  SET_FIREBASE_LOGOUT_SUCCESS,
  SET_FIREBASE_LOGOUT_PENDING,
  RESET_SIGN_IN_STATE,
} from '../actions/user-action';


const initialState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  userData: {},
  validUser: false,
  token: null,
  isLogOutSuccess: false,
  isLogOutPending: false,
  logOutError: null,

};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIREBASE_LOGOUT_PENDING:
      return {...state, isLogOutPending: action.isLogOutPending};
    case SET_FIREBASE_LOGOUT_SUCCESS:
      if(action.isLogOutSuccess){
        return {
          ...state,
          isLoginSuccess: false,
          userData: {},
        };
      }else{
        return state;
      }
    case SET_FIREBASE_LOGOUT_ERROR:
      return {...state, logOutError: action.logOutError};
    
    case RESET_SIGN_IN_STATE:
      return {...initialState};

    case SET_FIREBASE_LOGIN_PENDING:
      return {
        ...state, 
        isLoginPending: action.isLoginPending
      };
    case SET_FIREBASE_LOGIN_SUCCESS:
      return {
        ...state, 
        isLoginSuccess: action.isLoginSuccess,
        userData : action.userData
      };
    case SET_FIREBASE_LOGIN_ERROR:
      return {
        ...state, 
        loginError: action.loginError
      };
    default:
      return state;
  }
};

export default userReducer;
