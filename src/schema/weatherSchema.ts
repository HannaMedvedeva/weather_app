export interface Coordinate {
    lat: number;
    lon: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface MainInfo {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    visibility: number;
}

export interface WindInfo {
    speed: number;
    deg: number;
}

export interface CloudsInfo {
    all: number;
}

export interface CountryInfo {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface WeatherSchema {
    coord: Coordinate;
    weather: Weather[];
    base: string;
    main: MainInfo;
    wind: WindInfo;
    rain: Record<string, number>;
    clouds: CloudsInfo;
    dt: number;
    sys: CountryInfo;
    timezone: number;
    id: number;
    name: string;
    code: number;
}