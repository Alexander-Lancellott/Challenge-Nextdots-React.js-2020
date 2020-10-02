import styled from "@emotion/styled";

export const Body = styled.div`
  padding-bottom: 3rem;
  padding-top: 2rem;
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

  &:hover {
    transform: scale(1.1);
  }
`;

export const Styles: any = {
  attribute: {
    marginTop: "5.5rem",
  }
}

