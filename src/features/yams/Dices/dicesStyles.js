import styled from "styled-components";

export const colors = ["#F7DC4F", "#1343D0", "#F24C50", "#9A5AF6", "#55EA66"];

export const DicesContainer = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-width: 700px;
  overflow: scroll;
`;

export const DicesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-gap: 15px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const DiceContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: #24252a;
  border-radius: 10px;
  height: 50px;
  width: 50px;
`;

export const DiceValue = styled.p`
  margin: 0;
  font-weight: bold;
`;
