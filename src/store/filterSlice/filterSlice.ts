import {createSlice} from "@reduxjs/toolkit";
import {UnitsType} from "../../schema/unitsType";
import {DEFAULT_CITY} from "../../constants/defaultCity";

const savedName = localStorage.getItem('city');
const savedUnit = localStorage.getItem('unit') as UnitsType;

const initialState = {
    units: savedUnit || UnitsType.metric,
    city: savedName || DEFAULT_CITY,
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateUnits(state, action) {
            state.units = action.payload;
        },
        updateCities(state, action) {
            state.city = action.payload;
        },
        updateStorage(state) {
            localStorage.setItem('city', state.city);
            localStorage.setItem('unit', state.units);
        }
    },
});

export const updateUnits = filterSlice.actions.updateUnits;
export const updateCity = filterSlice.actions.updateCities;
export const updateStorage = filterSlice.actions.updateStorage;

