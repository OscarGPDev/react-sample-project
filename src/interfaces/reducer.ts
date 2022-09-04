import mathReducerActions from "../types/mathReducerActions";
import {SeriesCalculation} from "../math/SeriesCalculation";

export default interface reducer {
    type: mathReducerActions,
    payload: number,
    seriesCalculationInstance: SeriesCalculation
}