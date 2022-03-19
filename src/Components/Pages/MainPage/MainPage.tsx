import React from 'react';
import {WeatherBoard} from '../../WeatherBoard/WeatherBoard';
import './MainPage.module.css';
import {Header} from "../../Header/Header";
import {Footer} from "../../Footer/Footer";
import {Filters} from "../../Filters/Filters";
import {useAppDispatch, useAppSelector} from "../../../hooks/generalHooks";
import {getWeatherForecast} from "../../../store/weatherSlice/weatherSlice";
import styles from './MainPage.module.css';
import '../common.css';
import background from "../../../icons/bg.jpg";
import {updateStorage} from "../../../store/filterSlice/filterSlice";

export function MainPage() {
    const dispatch = useAppDispatch();
    const {units, city} = useAppSelector(state => state.filters)

    React.useEffect(() => {
        dispatch(getWeatherForecast({city, units}))

        // we need to update weather only once when page has been mounted
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    React.useEffect(() => {
        return () => {
            dispatch(updateStorage());
        }
    })

    return (
        <div className={styles.mainPage} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <Header/>
            <div>
                <Filters/>
                <WeatherBoard/>
            </div>
            <Footer/>
        </div>
    );
}

