import React, {useMemo} from "react";
import {useState} from "react";
import "./Chart.css";
import {BarChart, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const Chart = (props) => {
    const [style] = useState({
        width: 500,
        height: 500
    })

    const elementData = useMemo(() => props.measurementsDataList.getDataByElement(props.element), [props.measurementsDataList, props.element]);

    return (
        <div className={"chart"}>
            <div style={{textAlign: "center", width: style.width, height: 60}}>
                {props.element}
            </div>
            <div style={style}>
                <BarChart>
                </BarChart>
                <LineChart data={elementData} width={style.width} height={style.height} layout={"vertical"}>
                    <Line type="monotone" dataKey={"element"} name={"Amount of the chemical element"}/>
                    <XAxis type={"number"}/>
                    <YAxis dataKey={"name"} domain={[0, 'DataMax']} interval={"preserveStartEnd"}/>
                    <Tooltip/>
                </LineChart>
            </div>
        </div>
    )
}

export default Chart;