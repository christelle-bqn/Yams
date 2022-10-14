import React from "react";
import { Dice } from "./Dice";
import { colors, DicesContainer, DicesRow } from "./dicesStyles";

export const Dices = ({ dices }) => {
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <DicesContainer>
      {dices.map((dice, index) => {
        const win = dice.find(
          (val) =>
            typeof val.brelan === "boolean" || typeof val.yams === "boolean"
        );
        let color = win ? getRandomColor() : null;

        return (
          <DicesRow key={index}>
            {dice.map((value, index) => {
              if (typeof value === "number")
                return <Dice key={index} value={value} color={color} />;
            })}
          </DicesRow>
        );
      })}
    </DicesContainer>
  );
};
