import styled from "styled-components";

export const YamsContainer = styled.div`
  background-color: #121212;
  color: #fff;
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 90px);
`;

export const YamsInfos = styled.div`
  background-color: #121212;
  color: #fff;
  padding: 20px 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const Input = styled.input`
  appearance: none;
  outline: 0;
  border-width: 0px;
  border: none;
  -webkit-appearance: none !important;
  color: #fff;
  background-color: #121212;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-size: 12px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  color: #fff;
  background-color: #121212;
  border-style: solid;
  border-color: #fff;
  border-width: 0.5px;

  &:hover {
    color: #121212;
    background-color: #fff;
    cursor: pointer;
  }
`;

export const Cells = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 30px;
  margin-bottom: 20px;
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  height: 170px;
  width: 190px;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-color: #fff;
  border-width: 0.5px;

  /* &:hover {
    color: #121212;
    background-color: #fff;
  } */
`;

export const RollContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const Announcement = styled.div``;
