import { put, takeLatest, all } from "redux-saga/effects";

function* fetchUsers() {
  const json = yield fetch("https://reqres.in/api/users").then((response) =>
    response.json()
  );
  yield put({ type: "USERS_RECEIVED", json });
}

function* fetchLogin(action) {
  const { userData } = action;
  const json = yield fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((response) => response.json());
  yield put({ type: "LOGIN_RECEIVED", json });
}

function persistLoginToken(action) {
  if (action.json.token) sessionStorage.setItem("userToken", action.json.token);
}

function deleteLoginToken() {
  sessionStorage.removeItem("userToken");
}

function* update(action) {
  const { id, first_name, last_name, email } = action.userData;
  const json = yield fetch(`https://reqres.in/api/users/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ first_name, last_name, email }),
  }).then((response) => response.json());
  yield put({ type: "UPDATE_PUTTED", json });
}

function* putDelete(action) {
  const { id } = action.userData;
  const json = yield fetch(`https://reqres.in/api/users/${id}`, {
    method: "DELETE",
  }).then((response) => response);

  if (json.status === 204)
    yield put({ type: "DELETE_PUTTED", json, value: action });
}

function* actionWatcher() {
  yield takeLatest("GET_LOGIN", fetchLogin);
  yield takeLatest("GET_USERS_LIST", fetchUsers);
  yield takeLatest("LOGOUT", deleteLoginToken);
  yield takeLatest("PUT_UPDATE", update);
  yield takeLatest("LOGIN_RECEIVED", persistLoginToken);
  yield takeLatest("PUT_DELETE", putDelete);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
