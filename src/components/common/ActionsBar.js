import React from "react";
import { Button } from "./Button";
import { StyledContainer } from "../../styles/styled";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ActionsBar = ({ del, edit }) => {
  return (
    <ButtonsContainer>
      <Button label={"Delete"} action={del} disabled={true} />
      <Button label={"Save"} action={edit} color="green" />
    </ButtonsContainer>
  );
};
