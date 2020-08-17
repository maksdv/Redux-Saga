const getUsers = () => ({
  type: "GET_USERS_LIST"
});

const getLogin = userData => ({
  type: "GET_LOGIN",
  userData
});

const doLogout = () => ({
  type: "LOGOUT"
});

const persistLogin = () => ({
  type: "WRITE_LOGIN"
});

const update = userData => ({
  type: "PUT_UPDATE",
  userData
});

const updatePutted = () => ({
  type: "UPDATE_PUTTED"
});

const putDelete = userData => ({
  type: "PUT_DELETE",
  userData
});

export {
  getUsers,
  doLogout,
  getLogin,
  persistLogin,
  update,
  updatePutted,
  putDelete
};
