const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERS_LIST":
    case "GET_LOGIN":
      return { ...state, loggedIn: true };
    case "PUT_UPDATE":
    case "PUT_DELETE":
      return { ...state, loading: true };
    case "USERS_RECEIVED":
      return { ...state, users: action.json.data, loading: false };
    case "LOGIN_RECEIVED":
      return { ...state, loggedIn: action.json.token, loading: false };
    case "UPDATE_PUTTED":
    case "DELETE_PUTTED":
      return { ...state, loading: false };
    case "LOGOUT":
      return { ...state, loggedIn: false };
    case "WRITE_LOGIN":
      return { ...state, loggedIn: true };

    default:
      return state;
  }
};
export default reducer;
