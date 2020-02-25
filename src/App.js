import React, { useState } from 'react';
import './App.css';

function App() {
    const [binVal, setBinVal] = useState('');
    const [decVal, setDecVal] = useState('')

    function binChange(val) {

        if (val.length > 0) {
            if (val.match(/^[01]+$/g) === null)
                return;

            const reversedBinaryText = val
                .split('')
                .map(Number) // Convert to a number from string
                .reverse();

            // Calculate the result by accumulating previous vaue
            const result = reversedBinaryText.reduce(
                (accumulator, currentValue, idx) =>
                    accumulator + currentValue * Math.pow(2, idx)
            );
            setDecVal(result);
        }
        else {
            setDecVal('');
        }

        setBinVal(val);
    }

    return (
        <div className='container'>
            <div className="divTable">
                <div className="divTB">
                    <div className="divTR">
                        <div className="divTD">
                            Binario:
                    </div>
                        <div className="divTD">
                            <input
                                placeholder="Digite o numero Binario"
                                maxLength="8"
                                value={binVal}
                                onChange={e => binChange(e.target.value)} /></div>
                    </div>
                    <div className="divTR">
                        <div className="divTD">
                            Decimal:
                    </div>

                        <div className="divTD">
                            <input
                                placeholder="Numero Decimal"
                                className="decVal"
                                value={decVal}
                                readOnly /></div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default App;