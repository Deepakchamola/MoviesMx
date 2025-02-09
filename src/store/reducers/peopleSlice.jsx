import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const peopleSlice = createSlice({
  name: "peoples",
  initialState,
  reducers: {
    loadPeople: ( state, action ) => {
      state.info = action.payload;
    },
    removePeople: ( state ) => {
      state.info = null;
    },
  },
});

export const { loadPeople, removePeople } = peopleSlice.actions

export default peopleSlice.reducer;