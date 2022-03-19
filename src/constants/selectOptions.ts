import {SelectOption} from "../Components/WeatherBoard/WeatherBoard";
import {UnitsType} from "../schema/unitsType";

const SelectLabels: Record<UnitsType, string> = {
    [UnitsType.metric]: 'Metric, C°',
    [UnitsType.imperial]: 'Imperial, F°',
    [UnitsType.standard]: 'Kelvin, K°',

}

export const selectOptions = [
    {
        value: UnitsType.metric,
        label: SelectLabels[UnitsType.metric],
    },
    {
        value: UnitsType.imperial,
        label: SelectLabels[UnitsType.imperial],
    },
    {
        value: UnitsType.standard,
        label: SelectLabels[UnitsType.standard],
    },
] as SelectOption[];