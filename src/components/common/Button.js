import React from "react";
import { StyledButton } from "../../styles/styled";
export const Button = (props) => {
  const {
    label = "Button",
    action = {},
    color = "red",
    disabled = false,
  } = props;

  return (
    <StyledButton onClick={action} className={color} disabled={disabled}>
      <span>{label}</span>
    </StyledButton>
  );
};
