import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    products: 'Initial message',
    loader: false,
  },
  reducers: {
    GET_PRODUCTS: (state, action: PayloadAction<string>) => {
      state.loader = true;
    },
    SET_PRODUCTS: (state, action: PayloadAction<string>) => {
      state.loader = false;
      state.products = action.payload;
    },
  },
});

const {SET_PRODUCTS, GET_PRODUCTS} = messageSlice.actions;

export default messageSlice.reducer;
export {SET_PRODUCTS, GET_PRODUCTS};
