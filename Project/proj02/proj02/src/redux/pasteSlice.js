import { createSlice } from '@reduxjs/toolkit'

const initialState = {
pastes: localStorage.getItem("pastes")
? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addToPastes: () => {
     
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
