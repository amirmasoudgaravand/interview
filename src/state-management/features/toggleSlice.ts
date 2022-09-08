import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toggleSliceModel } from "../../models/components/state-management/features/toggleSlice.model";
/**
 Initial values ​​of the form
 * @defaultvalue
 */
const initialState: toggleSliceModel = {
  value: [
    { name: "simcardtype", value: "credit", state: true },
    { name: "chargeType",value:"" ,state: false },
  ],
};
/**
@function  create a reducer and create a new and modified state
**/
export const toggleSlice = createSlice({
  name: "amazingCharge",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<any>) => {
      const objIndex = state.value.findIndex(
        (obj) => obj.name === action.payload.name
      );
       state.value[objIndex].state = action.payload.state;
    },
  },
});

export const { toggle } = toggleSlice.actions;
export default toggleSlice.reducer;
