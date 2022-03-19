import React from 'react';

import {useAppSelector} from "../../hooks/generalHooks";
import styles from "./WeatherBoard.module.css";
import {UnitsType} from "../../schema/unitsType";
import {degree, MeasureSymbols, mm, percent, pressure, speed} from "../../schema/measureSymbols";
import {Time} from "../Time/Time";
import {round} from "../../helpers/roundNum";
import {WeatherRows} from "../WeatherRows/WeatherRows";

export interface SelectOption {
    label: UnitsType;
    value: UnitsType;
}

export function WeatherBoard() {
    const weatherData = useAppSelector((state) => state.weather.forecast);
    const units = useAppSelector((state) => state.filters.units);
    const weather = weatherData?.weather[0];
    const temperature = weatherData?.main;
    const wind = weatherData?.wind;
    const measureSymbol = MeasureSymbols[units];

    const temperatureItems = [
        {
            name: 'Max temperature:',
            value: temperature?.temp_max,
            measure: measureSymbol,
        },
        {
            name: 'Min temperature:',
            value: temperature?.temp_min,
            measure: measureSymbol,
        },
        {
            name: 'Feels like:',
            value: temperature?.feels_like,
            measure: measureSymbol,
        },
    ];

    const windItems = [
        {
            name: 'Degree:',
            value: wind?.deg,
            measure: degree,
        },
        {
            name: 'Speed:',
            value: wind?.speed,
            measure: speed,
        }
    ];

    const otherItems = [
        {
            name: 'Humidity:',
            value: temperature?.humidity,
            measure: percent,
        },
        {
            name: 'Pressure:',
            value: temperature?.pressure,
            measure: pressure,
        },
    ];

    if (weatherData?.rain?.['1h']) {
        otherItems.push({
            name: 'Rain:',
            value: weatherData?.rain?.['1h'],
            measure: mm,
        })
    }

    if (weatherData?.clouds?.all) {
        otherItems.push({
            name: 'Cloudiness:',
            value: weatherData?.clouds?.all,
            measure: percent,
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={`card opacity-75 ${styles.card}`}>
                <div className='d-flex justify-content-between align-items-start pb-5'>
                    <div>
                        <div className='d-flex align-items-center'>
                            <img className={styles.icon}
                                 src={`http://openweathermap.org/img/wn/${weather?.icon}@2x.png`}
                                 alt='weather icon'/>
                            <span className={styles.mainTemperature}>{round(temperature?.temp)}</span>
                            <span className='align-self-start pt-4'>{measureSymbol}</span>
                        </div>
                        <p className={styles.description}>{weather?.description}</p>
                    </div>
                    <div className='text-end'>
                        <h2 className='pt-3'>{weatherData?.name}</h2>
                        <Time/>
                    </div>
                </div>
                <div className={`mt-2 d-flex justify-content-between flex-wrap gap-3 ${styles.rows}`}>
                    <WeatherRows items={temperatureItems} title={'Temperature'}/>
                    <WeatherRows items={windItems} title={'Wind'}/>
                    {otherItems.length && (<WeatherRows items={otherItems} title={'Other'}/>)}
                </div>
            </div>
        </div>
    );
}
