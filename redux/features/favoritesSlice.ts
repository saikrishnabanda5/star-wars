import getLastValueBeforeSlash from "@/utils/getLastValueBeforeSlash";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Character {
  id: string;
  name: string;
  gender: string;
  homePlanet: string;
  birthYear: string;
  hairColor: string;
  height: string;
  mass: string;
}

interface FavoritesState {
  favorites: Character[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Character>) => {
      if (
        !state.favorites.some(
          (char: any) => getLastValueBeforeSlash(char.url) === action.payload.id
        )
      ) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (char: any) => getLastValueBeforeSlash(char.url) !== action.payload
      );
    },
    editFavorite: (
      state,
      action: PayloadAction<{ id: string; gender: string; height: string }>
    ) => {
      const character = state.favorites.find(
        (fav: any) => getLastValueBeforeSlash(fav.url) === action.payload.id
      );
      if (character) {
        character.gender = action.payload.gender;
        character.height = action.payload.height;
      }
    },
  },
});

export const { addFavorite, removeFavorite, editFavorite } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
