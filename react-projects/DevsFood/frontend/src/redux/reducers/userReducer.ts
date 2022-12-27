import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'user',
    initialState: {
        token: '',
        name: 'Teste',
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload
        }
    }
});

export const { setName } = slice.actions;
export default slice.reducer;