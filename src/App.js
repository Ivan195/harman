import React, {useState} from 'react';
import './App.css';
import Chart from './Chart/Сhart';
import {data as measurementsData, viewElements} from './MeasurementsData';

function App() {
    return (
        <div className="App">
            {viewElements.map((element, index) => {
                return <Chart key={index} measurementsDataList={measurementsData} element={element}
                              isFirst={index === 0}>
                </Chart>
            })}
        </div>
    );
}

export default App;
