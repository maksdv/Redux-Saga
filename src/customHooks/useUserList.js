import { useState, useEffect } from "react";
import { userStore } from "../stores/user";

// export const useUserList = () => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   userStore.dispatch({ type: "LIST_USERS" });
//   userStore.getState().then((resp) => {
//     setData((r) => resp);
//     setLoading(false);
//   });

//   return { loading, data };
// };

export const useUserList = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (!data) {
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
