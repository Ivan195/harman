import React, {useMemo} from "react";
import {useState} from "react";
import * as d3 from "d3-shape";
import {scaleLinear} from "d3-scale";
import {Xaxis} from "./Xaxis";
import {Yaxis} from "./Yaxis";
import {Xticks} from "./Xticks";
import {Yticks} from "./Yticks";
import "./Chart.css"
import {HorizontalLines} from "./HorizontalLines";
import * as lodash from "lodash";
import {colors} from "../MeasurementsData";

const Chart = (props) => {
    const [style] = useState({
        width: 200,
        height: 700,
        leftPadding: 50,
        topPadding: 20,
        chartStart: 80
    })

    const elementData = useMemo(() => props.measurementsDataList, [props.measurementsDataList]);

    const xScale = scaleLinear().domain([0, props.measurementsDataList.getMaxAmount(props.element)]).range([style.chartStart, style.width]);
    const yScale = scaleLinear().domain([0, props.measurementsDataList.getMaxDepth()]).range([style.topPadding, style.height]);
    const line = d3.line().defined(function (d) {
        return d[props.element] !== undefined && d["depth"] !== undefined;
    })
        .x(function (d) {
            return xScale(d[props.element]);
        })
        .y(function (d) {
            return yScale(d.depth);
        });

    const yTicks = yScale.ticks(10);

    const bars = lodash.sortBy(props.measurementsDataList, 'depth').filter(data => data.depth !== 0).reduce(((previousValue, currentValue) => {
        if (previousValue == null) {
            return [{
                start: 0,
                end: currentValue.depth,
                color: colors[Math.floor(Math.random() * 3)]
            }];
        }

        const lastElement = lodash.last(previousValue);
        previousValue.push({
            start: lastElement.end,
            end: currentValue.depth,
            color: colors[Math.floor(Math.random() * 3)]
        })
        return previousValue;
    }), null);

    return (
        <div className={"chart"}>
            <div className={"chart-text"} style={{textAlign: "center"}}>
                {props.element}
            </div>
            <div style={{display: 'inline-block'}}>
                <svg height={style.height + 50} width={style.width + 50}>
                    <HorizontalLines scale={yScale} ticks={yTicks} width={style.width} leftPadding={style.leftPadding}/>
                    <Yaxis scale={yScale} bars={bars} leftPadding={style.leftPadding}/>
                    {props.isFirst && <Yticks scale={yScale} ticks={yTicks} topPadding={style.topPadding}/>}
                    <Xaxis width={style.width} height={style.height} leftPadding={style.leftPadding} scale={xScale}/>
                    <Xticks scale={xScale} height={style.height}/>
                    <path d={line(elementData)} stroke={"black"} strokeWidth={1.5} fill={"none"}>
                    </path>
                </svg>
            </div>
            {props.isFirst &&
            <div className={"chart-text"} style={{textAlign: "left"}}>
                Depth, m
            </div>
            }
        </div>
    )
}

export default Chart;