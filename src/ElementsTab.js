import React from "react";
import {elements} from "./MeasurementsData"

const ElementTab = (props) => {
    return (
        <div>
            {elements.map((element) => {
                return <button key={element} onClick={() => props.setElement(element)}>{element}</button>
            })}
        </div>
    );
};

export default ElementTab;