export const deleteUser = async id => {
  const response = await fetch(`https://reqres.in/api/users/:${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "QpwL5tke4Pnpja7X2"
    }
  });
  console.log(response, "ñññññññññññññ");

  return response.json();
};
