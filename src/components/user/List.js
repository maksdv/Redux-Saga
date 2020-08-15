import React from "react";
import { Item } from "./Item";
import { StyledList } from "../../styles/styled";

export const List = ({ data, onPress }) => {
  console.log(data, "pppppppp");
  return (
    <StyledList className="usersList">
      {data &&
        data.map((item, i) => (
          <Item key={i.toString()} item={item} onPress={onPress} />
        ))}
    </StyledList>
  );
};
