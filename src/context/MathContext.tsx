import React from 'react';

// @ts-ignore
const MathContext = React.createContext();

export function useMathContext() {
    return React.useContext(MathContext);
}

export default MathContext;