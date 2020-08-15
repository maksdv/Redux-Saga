import { useState, useEffect } from "react";
import { userStore } from "../stores/user";

export const useUserList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (!data.length) {
          userStore.dispatch({ type: "LIST_USERS" });
          userStore.getState().then((resp) => {
            setData(resp);
          });
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [data]);
  return { loading, data, error };
};
