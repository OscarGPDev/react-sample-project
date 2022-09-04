import React from 'react';
import './App.css';
import Form from "./components/Form";
import MathContext from "./context/MathContext";
import mathReducer from "./reducer/mathReducer";
import Result from "./components/Result";
import Calculation from "./components/Calculation";

function App() {

    const [mathState, mathDispatch] = React.useReducer(mathReducer, {
        inputValue: 0,
        resultValue: 0,
        errorMessage: ""
    });

    const providerState = {
        mathState,
        mathDispatch
    }
    return (
        <div className="App">
            <MathContext.Provider value={providerState}>
                <Form/>
                <Calculation/>
                <Result/>
            </MathContext.Provider>
        </div>
    );
}

export default App;
