import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lodingApi: "idle",
  apiError: "",
 
};

const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    handleLoding: (state, { payload }) => {
      state.lodingApi = payload;
    },
    handleApiError: (state, { payload }) => {
      state.apiError = payload;
    },
   
   
  },
});

export const {
  handleLoding,
  handleApiError,

 
} = authentication.actions;

export default authentication.reducer;
