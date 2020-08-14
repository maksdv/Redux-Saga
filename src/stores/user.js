import { createStore } from "@reduxjs/toolkit";

const getUSers = async () => {
  return fetch("https://reqres.in/api/users")
    .then((resp) => resp.json())
    .then((data) => data.data);
};

const user = async (state, action) => {
  if (typeof state === "undefined") return {};

  switch (action.type) {
    case "USER_INFO":
      return { name: "pepe" };
    case "LIST_USERS":
      return getUSers();

    default:
      return state;
  }
};

export const userStore = createStore(user);
