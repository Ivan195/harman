import React from "react";

export const Yticks = (props) => {
    return props.ticks.map(tick => {
        return (
            <text className={"chart-text"} key={tick} y={props.scale(tick)} x={props.topPadding} stroke={"DeepSkyBlue"} textAnchor={"Start"} dominantBaseline={"Central"}>
                {tick}
            </text>
        );
    })
}