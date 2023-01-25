
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
  }

export const Myslicer= createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1
          },
          decrement: (state) => {
            state.value -= 1
          },
    }


})

export const { increment, decrement } = Myslicer.actions
export default Myslicer.reducer

