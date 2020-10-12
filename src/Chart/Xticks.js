import React from "react";

export const Xticks = (props) => {
    const ticks = props.scale.ticks(2);
    return ticks.map(tick => {
        return (
                <text className={"chart-text"} key={tick} y={props.height + 30} x={props.scale(tick)}
                      stroke={"DeepSkyBlue"} textAnchor={"Middle"}>
                    {tick}
                </text>
        );
    })
}