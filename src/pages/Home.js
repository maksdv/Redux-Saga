import React from "react";
import { useHistory } from "react-router-dom";
import { useUserList } from "../customHooks/useUserList";
import { List } from "../components/user/List";

export const Home = () => {
  const history = useHistory();
  const { data, loading } = useUserList();
  console.log(data);

  const goTo = (data) => {
    return history.push("/user-detail", { data });
  };

  if (loading) return <p>cargando</p>;

  return (
    <div>
      <p>logadooo</p>
      {/* <Link to="/user-detail">user go</Link> */}
      <List data={data} onPress={goTo} />
    </div>
  );
};
