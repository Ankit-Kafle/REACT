import { createSlice } from '@reduxjs/toolkit'

import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

const persistPastes = (pastes) => {
  localStorage.setItem("pastes", JSON.stringify(pastes));
};

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addToPastes: (state,action) => {

      const paste = action.payload;
      state.pastes.push(paste);
      persistPastes(state.pastes);
      toast("Paste Created Succesfully")
     
    },
    updateToPastes: (state, action) => {
      const updatedPaste = action.payload;
      const index = state.pastes.findIndex((paste) => paste._id === updatedPaste._id);

      if (index >= 0) {
        state.pastes[index] = updatedPaste;
        persistPastes(state.pastes);
        toast("Paste Updated Successfully");
      }
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      persistPastes(state.pastes);
      toast("All pastes cleared");
    },
    removeFromPastes: (state, action) => {
      const id = action.payload;
      state.pastes = state.pastes.filter((paste) => paste._id !== id);
      persistPastes(state.pastes);
      toast("Paste removed");
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer
