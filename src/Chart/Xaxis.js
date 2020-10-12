import React from "react";

export const Xaxis = (props) => {
    return (
        <line x1={props.leftPadding} x2={props.width} y1={props.height} y2={props.height} stroke={"DeepSkyBlue"} strokeWidth={2.5}/>
    )
}

