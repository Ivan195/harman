import React from "react";

export const HorizontalLines = (props) => {
    return props.ticks.map(tick => {
        const yCoordinate = props.scale(tick);
        return (
           <line key={tick} x1={props.leftPadding} x2={props.width} y1={yCoordinate} y2={yCoordinate} stroke={"DeepSkyBlue"} strokeWidth={0.5}/>
        );
    })
}