/* eslint-disable linebreak-style */
import {CAMPSITES} from '../../app/shared/CAMPSITES.js';

export const selectAllCampsites = () => {
  return CAMPSITES;
};

// export const selectRandomCampsite = () => {
//   let x = Math.floor(Math.random() * CAMPSITES.length);
//   return CAMPSITES[x];
// };

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === id);
};