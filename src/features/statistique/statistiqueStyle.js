import styled from "styled-components";

export const ContainerCells = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Cell = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  aspect-ratio: 1;
  border: 1px solid white;
  margin: 0;
  text-align: center;
  padding: 30px;
  background-color: #121212;
  color: white;

  &:hover {
    background-color: grey;
  }

  & > span:first-child {
    font-size: 30px;
  }
  & > span:last-child {
    font-size: 40px;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  padding: 10px 40px;
`;
