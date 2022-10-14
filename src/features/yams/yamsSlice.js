import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dices: [],
  nbRoll: 100,
  nbBrelan: 0,
  nbYams: 0,
  currentNbBrelan: 0,
  currentNbYams: 0,
  nbPartie: 0,
  nbBitcoin: 0,
  chanceToGetBitcoin: 2,
};

export const yamsSlice = createSlice({
  name: "yams",
  initialState,

  reducers: {
    setNbRoll: (state, action) => {
      state.nbRoll = action.payload;
      state.chanceToGetBitcoin = (
        Math.pow(1 / 6, 3) * action.payload * 3 +
        1
      ).toFixed(0);
    },
    reset: (state) => {
      state.dices = [];
      state.currentNbYams = 0;
      state.currentNbBrelan = 0;
    },
    rollDices: (state) => {
      state.nbPartie++;
      const dices = [...state.dices];

      let currentDices = [];

      // Lance les dés
      for (let i = 0; i < state.nbRoll; i++) {
        currentDices = [];
        for (let j = 0; j < 3; j++) {
          currentDices.push(Math.floor(Math.random() * 6) + 1);
        }

        // Vérifie si on a un Brelan
        let brelan = true;
        for (let j = 1; j < currentDices.length; j++) {
          if (currentDices[j] !== currentDices[j - 1]) {
            brelan = false;
            break;
          }
        }

        // Incrémente le nombre de brelan
        if (brelan) {
          state.nbBrelan++;
          state.currentNbBrelan++;
          currentDices.push({ brelan: true });

          // Vérifie si on a un Yams
          if (brelan && currentDices[0] === 6) {
            state.nbYams++;
            state.currentNbYams++;
            currentDices.push({ yams: true });
          }
        }

        // push currentDices dans dices
        dices.push(currentDices);
      }

      if (state.chanceToGetBitcoin <= state.currentNbYams) {
        state.nbBitcoin++;
      }

      state.dices = dices;
    },
  },
});

export const { reset, setNbRoll, rollDices } = yamsSlice.actions;

export const selectYams = (state) => state.yams;

export default yamsSlice.reducer;
