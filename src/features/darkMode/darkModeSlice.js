import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkModeEnabled: false,
}


export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkModeEnabled = !state.darkModeEnabled;
        }
    }
})



export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;