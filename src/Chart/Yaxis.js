import React from "react";

export const Yaxis = (props) => {
    const barWidth = 10;
    return props.bars.map((bar, index) => {
        return <polygon key={index} points={
            (props.leftPadding + barWidth) + ',' + props.scale(bar.start) + ' '
            + (props.leftPadding + barWidth) + ',' + props.scale(bar.end) + ' '
            + props.leftPadding + ',' + props.scale(bar.end) + ' '
            + props.leftPadding + ',' + props.scale(bar.start)
        } stroke={bar.color} style={{fill: bar.color}}/>
    })
}