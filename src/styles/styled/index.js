import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  padding: 1.6em;
`;

export const StyledUserDetail = styled.div`
  padding: 1.6em;
`;

export const StyledList = styled.div`
  display: grid;
`;

export const StyledForm = styled.form`
  background: #d9d7d7;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  border: none;
  height: 5vh;
  margin: 2vh 0;
  padding: 0 1rem;
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.primary ? "blue" : "white")};
  color: #ffffff;
  height: 6vh;
  &:hover {
    cursor: pointer;
  }
`;
