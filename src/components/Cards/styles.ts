import styled from "@emotion/styled";

export const Body = styled.div`
  padding-bottom: 3rem;
  padding-top: 2rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 2px 2px 5px black;
`;

export const Card = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 1.5rem;
  transition: transform 0.5s ease;

  &:not(#disable):hover {
    transform: scale(1.1);
  }
`;

export const Styles: any = {
  attribute: {
    marginTop: "5.5rem",
  },
  card: {
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    boxShadow: "2px 2px 5px black",
  },
};