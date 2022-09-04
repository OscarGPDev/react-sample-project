import React from "react";
import {useMathContext} from "../context/MathContext";
import mathReducerActionsEnum from "../enums/mathReducerActionsEnum";

const Form = () => {
    // @ts-ignore
    const {mathState, mathDispatch} = useMathContext();
    return <div>
        <h5>Calculadora</h5>
        <div>
            <p>En esta página puedes calcular elementos de la serie:</p>
            <img src="/serie.png" alt="Formula"/>
        </div>
        <label>
            Ingresa el termino n a calcular:
            <input type="text" value={mathState.inputValue} onChange={(e) => {
                if (Number.isInteger(+e.target.value)) {
                    mathDispatch({type: mathReducerActionsEnum.setValue, payload: +e.target.value})
                }
            }
            }/>
        </label>
    </div>
};
export default Form;