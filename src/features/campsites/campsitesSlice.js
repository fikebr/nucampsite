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

export const selectAllCampsites = () => CAMPSITES;

export const selectCampsiteById = (id) => CAMPSITES.find((campsite) => campsite.id === parseInt(id));

export const selectFeaturedCampsite = () => CAMPSITES.find((campsite) => campsite.featured);
