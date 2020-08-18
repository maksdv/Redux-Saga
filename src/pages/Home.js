import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { List } from "../components/user/List";
import { getUsers } from "../stores/functions";

let Home = (props) => {
  const { getUsers, usersList, loading } = props;
  const history = useHistory();
  //const { data, loading } = useUserList();

  useEffect(() => {
    if (!usersList) getUsers();
  }, []);

  const goTo = (data) => {
    return history.push("/user-detail", { data });
  };

  return (
    <div>
      {loading ? <p>loading</p> : <List data={usersList} onPress={goTo} />}
    </div>
  );
};

const mapDispatchToProps = {
  getUsers: getUsers,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  usersList: state.users,
});

Home = connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
