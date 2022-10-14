import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dices } from "./Dices/Dices";
import { reset, rollDices, selectYams, setNbRoll } from "./yamsSlice";
import {
  Button,
  Cell,
  Input,
  YamsContainer,
  YamsInfos,
  RollContainer,
  Cells,
  Announcement,
  Grid,
} from "./yamsStyles";

export function Yams() {
  const {
    nbRoll,
    dices,
    currentNbYams,
    currentNbBrelan,
    nbPartie,
    nbBitcoin,
    chanceToGetBitcoin,
  } = useSelector(selectYams);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setNbRoll(value));
  };

  const handleRun = () => {
    dispatch(reset());
    dispatch(rollDices());
  };

  return (
    <YamsContainer>
      <YamsInfos>
        <div>
          <Cells>
            <Grid>
              <Cell>
                <p>BRELAN</p>
                <p>{currentNbBrelan}</p>
              </Cell>
              <Cell>
                <p>YAMS </p>
                <p>{currentNbYams}</p>
              </Cell>
              <Cell>
                <p>NOMBRE DE PARTIE</p>
                <p>{nbPartie}</p>
              </Cell>
            </Grid>

            <RollContainer>
              <Input
                type="number"
                name="nbRoll"
                onChange={handleChange}
                value={nbRoll}
                min="1"
                max="150"
              />

              <Button onClick={handleRun}>LANCER</Button>
            </RollContainer>
          </Cells>
          <Announcement>
            <p>FAITES {chanceToGetBitcoin} YAMS POUR GAGNER 1 BITCOIN</p>
            <p>BITCOINS : {nbBitcoin}</p>
          </Announcement>
        </div>
      </YamsInfos>
      {dices.length > 0 ? (
        <Dices dices={dices} />
      ) : (
        <>
          <p>
            Choisissez un nombre de lancers puis cliquez sur le bouton "LANCER"
          </p>
          <p>Gagner des Bitcoins en faisant des YAMS (3 dés de 6)</p>
          <p>À vous de jouer !</p>
        </>
      )}
    </YamsContainer>
  );
}
