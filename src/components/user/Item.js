import React from "react";
import { StyledContainer } from "../../styles/styled";
export const Item = ({ item, onPress }) => {
  return (
    <StyledContainer onClick={() => onPress(item)}>
      <div>
        <img src={item.avatar} />
      </div>

      <div>
        <p>Name:{item.first_name}</p>
        <p>Surname:{item.last_name}</p>
        <p>Email:{item.email}</p>
      </div>
    </StyledContainer>
  );
};
