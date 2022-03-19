import Select, {SingleValue} from "react-select";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/generalHooks";
import {SelectOption} from "../WeatherBoard/WeatherBoard";
import {getWeatherForecast, weatherActions} from "../../store/weatherSlice/weatherSlice";
import {selectOptions} from "../../constants/selectOptions";
import styles from "./Filters.module.css";
import {updateCity, updateUnits} from "../../store/filterSlice/filterSlice";
import {UnitsType} from "../../schema/unitsType";
import {Link} from "react-router-dom";

export function Filters() {
    const hasError = useAppSelector((state) => state.weather.hasError);

    const [city, setCity]  = useState<string>('');
    const [units, setUnits]  = useState<UnitsType>(UnitsType.metric);

    const dispatch = useAppDispatch();

    const onChangeUnits = React.useCallback((newValue: SingleValue<SelectOption>) => {
        setUnits(newValue!.value)
    }, []);

    const onChangeCityInput = React.useCallback(({target}: React.ChangeEvent<HTMLInputElement>) => {
        setCity(target?.value)
        if(hasError){
            dispatch(weatherActions.updateError(false))
        }
    }, [hasError, dispatch]);

    const onClickHandler = React.useCallback(()=>{
        dispatch(updateUnits(units));
        dispatch(updateCity(city));

        dispatch(getWeatherForecast({city, units}))
}, [dispatch, city, units])

    const enterClickHandler = React.useCallback((e)=>{

        if(e.key === 'Enter') {
            e.preventDefault();
            dispatch(updateUnits(units));
            dispatch(updateCity(city));

            dispatch(getWeatherForecast({city, units}))
        }

    }, [dispatch, city, units])
    return (
        <div className={styles.wrapper}>
            <div className={`row gap-2`}>
                <div className='col-md position-relative'>
                    <input
                        className={`form-control ${styles.input}`}
                        placeholder="Type location here"
                        onChange={onChangeCityInput}
                        value={city}
                        onKeyDown={enterClickHandler}
                    />
                    {hasError && (<p className={`text-danger ${styles.error}`}>Incorrect city. Please check <Link to='/about'>documentation.</Link></p>)}
                </div>

                <div className='col-md'>
                    <Select
                        className={styles.select}
                        options={selectOptions}
                        closeMenuOnSelect={true}
                        placeholder="Choose type"
                        onChange={onChangeUnits}
                        defaultValue={selectOptions[0]}
                    />
                </div>

                <button
                    className={`col-2 btn btn-primary align-self-start ${styles.button}`}
                    onClick={onClickHandler}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}