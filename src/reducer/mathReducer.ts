import mathState from "../interfaces/mathState";
import reducer from "../interfaces/reducer";
import mathReducerActionsEnum from "../enums/mathReducerActionsEnum";

const mathReducer = (state: mathState, action: reducer) => {
    switch (action.type) {
        case mathReducerActionsEnum.setValue:
            state = {...state, inputValue: action.payload};
            return state;
        case mathReducerActionsEnum.calculateValue:
            let resultValue: number = 0;
            let errorMessage: string = "";
            try {
                resultValue = action.seriesCalculationInstance.calcSeriesTerm(state.inputValue);
            } catch (e) {
                errorMessage = "No hay un valor valido para ese termino"
            }
            state = {...state, resultValue, errorMessage};
            return state;
        default:
            return state
    }
}
export default mathReducer;