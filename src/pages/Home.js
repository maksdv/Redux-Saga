import React from "react";
import { useHistory } from "react-router-dom";
import { useUserList } from "../customHooks/useUserList";
import { List } from "../components/layout/user/List";
export const Home = ({ auth }) => {
  const history = useHistory();
  const { data, loading } = useUserList();

  const goTo = (data) => {
    console.log(data, "----->");
    return history.push("/user-detail", { data });
  };

  if (!auth) {
    return (
      <div>
        <p>logueate</p>
      </div>
    );
  }
  if (loading) return <p>cargando</p>;

  return (
    <div>
      <p>logadooo</p>
      {/* <Link to="/user-detail">user go</Link> */}
      <List data={data} onPress={goTo} />
    </div>
  );
};
