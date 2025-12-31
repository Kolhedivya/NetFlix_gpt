import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptToggle",
    initialState: {
        gptToggleValue: false
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.gptToggleValue = !state.gptToggleValue;
        }
    }
}
)

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;