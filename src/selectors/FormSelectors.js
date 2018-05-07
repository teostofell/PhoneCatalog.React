import { createSelector } from "reselect";

export const brandsSelector = (state) => state.formData.brands;
export const resolutionsSelector = (state) => state.formData.resolutions;
export const osSelector = (state) => state.formData.os;
export const citiesSelector = (state) => state.formData.cities;
export const rolesSelector = (state) => state.formData.roles;

