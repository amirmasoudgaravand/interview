import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./features/formSlice";
import languageSlice from "./features/languageSlice";
import toggleSlice from "./features/toggleSlice";

/**
@function  create a store To save state
**/
export const store=configureStore({
    reducer:{
        from:formSlice,
        toggle:toggleSlice,
        language:languageSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;