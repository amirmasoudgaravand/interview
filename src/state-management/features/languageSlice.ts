import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface languageState {
  value: boolean;
}
/**
 Initial values ​​of the form
 * @defaultvalue
 */
const initialState: languageState = {
  value: false,
};
/**
@function  create a reducer and create a new and modified state
**/
export const languageSlice = createSlice({
  name: "changeLanguage",
  initialState,
  reducers: {
    language: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { language } = languageSlice.actions;
export default languageSlice.reducer;
