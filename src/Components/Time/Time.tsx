import React, {useState} from 'react';

import {useAppSelector} from "../../hooks/generalHooks";
import {DEFAULT_CITY} from "../../constants/defaultCity";

const cityTimezones = require('city-timezones');

export function Time(){
    const [time, setTime] = useState(new Date(Date.now()).toLocaleString('en-US'));
    const currentCity = useAppSelector((state) => state.weather.forecast?.name) || DEFAULT_CITY;

    const timer: { current: NodeJS.Timeout | null } =  React.useRef(null);

    React.useEffect(()=> {
        const cityLookup = cityTimezones.lookupViaCity(currentCity)[0];
        if(cityLookup){
            timer.current = setInterval(()=> {
                setTime( new Date(Date.now()).toLocaleString('en-US', { timeZone: cityLookup.timezone }));
            }, 1000);
        }
        return ()=> {
            clearInterval(timer.current  as NodeJS.Timeout);
        }
    }, [currentCity]);

    return (
        <p className='font-monospace pb-0'>
            {time}
        </p>
    )
}