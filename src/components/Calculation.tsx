import {useMathContext} from "../context/MathContext";
import {useEffect, useState} from "react";
import {SeriesCalculation} from "../math/SeriesCalculation";
import mathReducerActionsEnum from "../enums/mathReducerActionsEnum";

const Calculation = () => {
    // @ts-ignore
    const {mathState, mathDispatch} = useMathContext();
    const [seriesCalculationInstance] = useState<SeriesCalculation>(new SeriesCalculation());
    useEffect(() => {
        mathDispatch({type: mathReducerActionsEnum.calculateValue, seriesCalculationInstance})
    }, [mathState.inputValue])
    return null;
}
export default Calculation;