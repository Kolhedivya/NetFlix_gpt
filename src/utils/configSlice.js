import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice(
    {
        name: 'config',
        initialState: {
            language: 'en'
        },
        reducers: {
            addLanguagePref: (state, action) => {
                state.language = action.payload
            }
        }
    }
)
export const { addLanguagePref } = configSlice.actions;
export default configSlice.reducer;