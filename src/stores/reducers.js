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
      return {
        ...state,
        loggedIn: action.json.token,
        loading: false,
        response: action.json,
      };
    case "UPDATE_PUTTED":
    case "DELETE_PUTTED":
      if (state.users) {
        const newUsers = state.users.filter(
          (user) => user.id !== action.value.userData
        );
        state.users = newUsers;
      }
      return { ...state, loading: false, deleted: action.value.userData };
    case "LOGOUT":
      return { ...state, loggedIn: false };
    case "WRITE_LOGIN":
      return { ...state, loggedIn: true };

    default:
      return state;
  }
};
export default reducer;
