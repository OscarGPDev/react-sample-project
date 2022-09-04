import {SeriesCalculation} from "../math/SeriesCalculation";

import mathReducerActions from "../types/mathReducerActions";

export default interface reducer {
    type: mathReducerActions,
    seriesCalculationInstance: SeriesCalculation,
    payload: number,
}