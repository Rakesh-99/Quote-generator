import { createSlice } from '@reduxjs/toolkit';


export const quoteSlice = createSlice({

    name: 'quoteSliceApp',

    initialState: {
        error: null,
        isLoading: false,
        quotesList: []
    },
    reducers: {
        addQuotes: (state, action) => {
            state.quotesList.push(action.payload)
        }
    }
});

export default quoteSlice.reducer
export const { addQuotes } = quoteSlice.actions;