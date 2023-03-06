import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from 'utils/productsArray';


const initialState:Product[] = []


export const fetchProducts = createAsyncThunk<Product[], undefined>(
  "products/fetchProducts",
  async() => {
    const response = await axios.get(
      'https://run.mocky.io/v3/79ef58d6-a6f9-4df4-963a-e04ea7fe09fb'
    )
    return response.data.products
  }
)

export const productsSlice = createSlice({
  name:"products",
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled,(state,action) => {
      return (state = action.payload)
    })
  },
})

export default productsSlice.reducer