/* eslint-disable linebreak-style */
import {createSlice} from '@reduxjs/toolkit';
import {CAMPSITES} from '../../app/shared/CAMPSITES.js';

const initialState = {
  campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
  name: 'campsites',
  initialState: initialState
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};