// LIBS
import styled from "@emotion/styled";

export const ArrowBack = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const Button = styled.button`
  &:hover {
    background-color: grey;
  }
`;

export const Input = styled.input`
  border: none;
  float: left;
  height: 100%;
  outline: none;
  width: 100%;

  &:focus {
    box-shadow: none;
  }
`;

export const Search = styled.div`
  background-color: white;
  border: 2px;
  font-size: 15px;
  font-weight: bold;
  margin-left: 1rem;
  margin-right: 1rem;
  height: 2rem;
  outline: none;
  padding-left: 1rem;
  padding-right: 2rem;
  width: 60%;

  &:hover {
    box-shadow: 0 0 3pt 1pt #3ccc3c;
  }
`;

export const SwitchContainer = styled.div`
  margin-right: auto;
  width: 6rem;
`;

export const Styles: any = {
  filters: {
    backgroundColor: "#371b0f",
  },
  navBar: {
    backgroundColor: "#371b0f",
    boxShadow: "0px -1px 9px black, 0px 3px 9px black",
  },
};
