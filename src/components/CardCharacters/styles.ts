// LIBS
import styled from "@emotion/styled";

export const Card = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  padding-left: 2%;
  padding-right: 2%;
  transition: transform 0.5s ease;

  &:not(#disable):hover {
    transform: scale(1.1);
  }
`;

export const Styles: any = {
  card: {
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    boxShadow: "2px 2px 5px black",
  },
};
