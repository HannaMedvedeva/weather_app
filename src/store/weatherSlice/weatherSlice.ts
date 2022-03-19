import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchWeatherForecast} from '../../services/weather/weatherAPI';
import {WeatherSchema} from "../../schema/weatherSchema";
import {UnitsType} from "../../schema/unitsType";

export interface WeatherBoardState {
    forecast?: WeatherSchema;
    status: 'idle' | 'loading' | 'failed';
    hasError?: boolean;
}

export interface WeatherForecastProps {
  city?: string;
  units?: UnitsType;
}

const initialState: WeatherBoardState = {
    status: 'idle',
    hasError: false,
};

export const getWeatherForecast = createAsyncThunk(
    'weatherForecast',
    async (options: WeatherForecastProps) => {
        return await fetchWeatherForecast(options);
    }
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        updateError(state, action) {
            state.hasError = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherForecast.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getWeatherForecast.fulfilled, (state, action) => {
                if(action.payload){
                    state.status = 'idle';
                    state.forecast = action.payload;
                } else {
                    state.hasError = true;
                }

            })
            .addCase(getWeatherForecast.rejected, (state) => {
            state.status = 'failed';
            });
    },
});

export const weatherActions = weatherSlice.actions;
