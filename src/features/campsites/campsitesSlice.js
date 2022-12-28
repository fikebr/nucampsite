import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES.js';

const initialState = {
    campsitesArray: CAMPSITES,
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => state.campsites.campsitesArray;

export const selectCampsiteById = (id) => (state) =>
    state.campsites.campsitesArray.find((campsite) => campsite.id === parseInt(id));

export const selectFeaturedCampsite = (state) => state.campsites.campsitesArray.find((campsite) => campsite.featured);
