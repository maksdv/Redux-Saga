import React from "react";
import { StyledContainer, StyledContainerCenter } from "../../styles/styled";
export const Item = ({ item, onPress }) => {
  return (
    <StyledContainer className="listItem" onClick={() => onPress(item)}>
      <StyledContainerCenter>
        <img src={item.avatar} />
      </StyledContainerCenter>

      <div className="listItemText">
        <p>{item.first_name}</p>
        <p>{item.last_name}</p>
        <p>{item.email}</p>
      </div>
    </StyledContainer>
  );
};
