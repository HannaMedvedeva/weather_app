import {UnitsType} from "./unitsType";

export const MeasureSymbols: Record<UnitsType, string> = {
    [UnitsType.metric]: 'C°',
    [UnitsType.standard]: 'K°',
    [UnitsType.imperial]: 'F°',
}

export const degree = '°';
export const speed = 'km/h';
export const percent = '%';
export const pressure = 'mmhg';
export const mm = 'mm';