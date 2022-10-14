import React from "react";
import { useSelector } from "react-redux";
import { selectYams } from "../yams/yamsSlice";
import { Container, Cell, ContainerCells } from "./statistiqueStyle";

const Statistique = () => {
  const { nbRoll, dices, nbYams, nbBrelan, nbPartie } = useSelector(selectYams);

  let nb1 = 0;
  let nb2 = 0;
  let nb3 = 0;
  let nb4 = 0;
  let nb5 = 0;
  let nb6 = 0;

  dices.forEach((roll) => {
    roll.forEach((dice) => {
      switch (dice) {
        case 1:
          nb1++;
          break;
        case 2:
          nb2++;
          break;
        case 3:
          nb3++;
          break;
        case 4:
          nb4++;
          break;
        case 5:
          nb5++;
          break;
        case 6:
          nb6++;
          break;
        default:
          break;
      }
    });
  });

  return nbPartie > 0 ? (
    <ContainerCells>
      <Cell>
        <span>Nombre de partie :</span>
        <span> {nbPartie}</span>
      </Cell>
      <Cell>
        <span>Nombre de yams :</span>
        <span> {nbYams}</span>
      </Cell>
      <Cell>
        <span>Nombre de brelan :</span>
        <span> {nbBrelan}</span>
      </Cell>
      <Cell>
        <span>Nombre de Yams moyen par partie :</span>{" "}
        <span>{(nbYams / nbPartie).toFixed(2)}</span>
      </Cell>
      <Cell>
        <span>Nombre de Brelan moyen par partie :</span>
        <span> {(nbBrelan / nbPartie).toFixed(2)}</span>
      </Cell>
      <Cell>
        <span>Chance de faire un Yams avec {nbRoll} lancés : </span>
        <span>{(Math.pow(1 / 6, 3) * nbRoll).toFixed(2)}%</span>
      </Cell>
      <Cell>
        <span> Pourcentage de 1 :</span>
        <span> {((nb1 / 3 / nbRoll) * 100).toFixed(2)}%</span>
      </Cell>
      <Cell>
        <span> Pourcentage de 2 :</span>
        <span> {((nb2 / 3 / nbRoll) * 100).toFixed(2)}%</span>
      </Cell>
      <Cell>
        <span> Pourcentage de 3 :</span>
        <span> {((nb3 / 3 / nbRoll) * 100).toFixed(2)}%</span>
      </Cell>
      <Cell>
        <span> Pourcentage de 4 :</span>
        <span> {((nb4 / 3 / nbRoll) * 100).toFixed(2)}%</span>
      </Cell>
      <Cell>
        <span> Pourcentage de 5 :</span>
        <span> {((nb5 / 3 / nbRoll) * 100).toFixed(2)}%</span>
      </Cell>
      <Cell>
        <span> Pourcentage de 6 :</span>
        <span> {((nb6 / 3 / nbRoll) * 100).toFixed(2)}%</span>
      </Cell>
    </ContainerCells>
  ) : (
    <Container>
      <h1>Il faut jouer au moins une partie</h1>
    </Container>
  );
};

export default Statistique;
