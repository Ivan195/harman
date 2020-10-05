import React, {useState} from 'react';
import './App.css';
import Chart from './Сhart';
import {data as measurementsData, elements} from './MeasurementsData';
import ElementTab from "./ElementsTab";

function App() {
    const [element, setElement] = useState(elements[0]);
    return (
        <div className="App">
            <ElementTab setElement={setElement}/>
            <Chart measurementsDataList={measurementsData} element={element}>

            </Chart>
        </div>
    );
}

export default App;
