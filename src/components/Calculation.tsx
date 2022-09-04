import {useMathContext} from "../context/MathContext";
import React, {useEffect} from "react";
import mathReducerActionsEnum from "../enums/mathReducerActionsEnum";
import {SeriesCalculation} from "../math/SeriesCalculation";


const Calculation = () => {
    // @ts-ignore
    const {mathState, mathDispatch} = useMathContext();
    const [seriesCalculationInstance, setSeriesCalculationInstance] = React.useState<SeriesCalculation>();
    useEffect(() => {
        if (!seriesCalculationInstance) {
            setSeriesCalculationInstance(new SeriesCalculation());
        }
        mathDispatch({type: mathReducerActionsEnum.calculateValue, seriesCalculationInstance})

    }, [mathState.inputValue, seriesCalculationInstance, mathDispatch])
    return null;
}
export default Calculation;