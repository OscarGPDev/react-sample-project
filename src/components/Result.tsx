import {useMathContext} from "../context/MathContext";

const Result = () => {
    // @ts-ignore
    const {mathState} = useMathContext();
    return <div>
        <div>
            <h6>Calculando</h6>
            <p>f({mathState.inputValue}) = 2triangular({mathState.inputValue} - 2) * 3primo({mathState.inputValue} - 2)
                *
                7fibonacci({mathState.inputValue} - 1)</p>
            <h3>f({mathState.inputValue}) = {mathState.errorMessage || mathState.resultValue}</h3>
        </div>
    </div>
};
export default Result;