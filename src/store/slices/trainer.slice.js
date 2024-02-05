import { createSlice } from '@reduxjs/toolkit';

export const trainerS = createSlice({
    name: 'trainer',
    initialState: "",
    reducers: {
        setTrainerS: (state, action) => action.payload 
    }   
})

export const { setTrainerS } = trainerS.actions;

export default trainerS.reducer;
