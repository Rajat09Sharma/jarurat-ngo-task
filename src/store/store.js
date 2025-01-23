import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./user-slice";

const store = configureStore({
    reducer: usersSlice.reducer
})

export default store;