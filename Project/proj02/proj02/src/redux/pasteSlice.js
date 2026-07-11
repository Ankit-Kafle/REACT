import { createSlice } from '@reduxjs/toolkit'

import toast from 'react-hot-toast';

const initialState = {
pastes: localStorage.getItem("pastes")
? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addToPastes: (state,action) => {

      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItems("pastes",state.pastes);
      toast("Paste Created Succesfully")
     
    },
    updateToPastes: () => {
     
    },
    resetAllPastes: () => {
     
    },
    removeFromPastes: () => {
     
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer
