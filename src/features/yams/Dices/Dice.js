import React from "react";
import { DiceContainer, DiceValue } from "./dicesStyles";

export const Dice = ({ value, color }) => {
  return (
    <DiceContainer
      style={{
        backgroundColor: color,
      }}
    >
      {<DiceValue>{value}</DiceValue>}
    </DiceContainer>
  );
};
