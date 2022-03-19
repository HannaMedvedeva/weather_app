import {round} from "../../helpers/roundNum";
import React from "react";
import styles from './WeatherRows.module.css';
import {WeatherRowItem} from "../../schema/weatherRowItem";



interface WeatherRowsProps {
    items: WeatherRowItem[];
    title: string;
}

export function WeatherRows({ items, title}: WeatherRowsProps) {
    return <div className={styles.wrapper}>
        <h4>{title}</h4>
        {items.map(({name, value, measure}) => {
            return <div key={name} className='d-flex'>
                <p className='mb-0'>{name}</p>
                <span className='px-1'>{round(value)}</span>
                {measure && (<span className='align-self-start'>{measure}</span>)}
            </div>
        })}
    </div>
}