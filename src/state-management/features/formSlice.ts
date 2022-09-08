import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formSliceModel } from "../../models/components/state-management/features/fromSlice.model";
/**
 Initial values ​​of the form
 * @defaultvalue
 */
const initialState: formSliceModel = {
  value: [
    { name: "simcardtype", value: "credit" },
    { name: "mobilePhone", value: "" },
    { name: "chargeAmountRials", value: "20,000" },
    { name: "purchaseBonus", value: "200" },
    { name: "chargeType", value: "normal" },
    { name: "bankName", value: "" },
    { name: "email", value: "" },
  ],
};
/**
@function  create a reducer and create a new and modified state
**/
export const formSlice = createSlice({
  name: "formCharge",
  initialState,
  reducers: {
    addPhoneNumber: (state, action: PayloadAction<any>) => {
      const objIndex = state.value.findIndex(
        (obj) => obj.name === action.payload.name
      );
      state.value[objIndex].value = action.payload.value;
    },
  },
});

export const { addPhoneNumber } = formSlice.actions;
export default formSlice.reducer;
