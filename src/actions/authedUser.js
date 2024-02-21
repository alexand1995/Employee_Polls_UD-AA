export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function handleLogin(authedUser) {
  return (dispatch) => {
    dispatch(setAuthedUser(authedUser));
  };
}

export function logoutAuthedUser() {
  return {
      type: LOGOUT_AUTHED_USER,
  };
}

export function handleLogout() {
  return (dispatch) => {
      return dispatch(logoutAuthedUser());
  };
}
