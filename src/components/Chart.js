import React, { useState } from "react";
import { convertUnixTimestampToDate } from "../helpers/date-helper";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { mockHistoricalData } from "../constants/mock";
import Card from "./Card";

const Chart = () => {
    const [data, setData] = useState(mockHistoricalData);
    const [filter, setFilter] = useState("1W");

    const formatData = () => {
        return data.c.map((item, index) => {
            return {
                value: item.toFixed(2),
                date: convertUnixTimestampToDate(data.t[index]),
            };
        });
    };

    return (
        <Card>
            <ResponsiveContainer>
                <AreaChart data={formatData(data)}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#312e81"
                        fillOpacity={1}
                        strokeWidth={0.5} />
                    <Tooltip />
                    <XAxis dataKey={"date"} />
                    <YAxis domain={["dataMin", "dataMax"]} />
                </AreaChart>
            </ResponsiveContainer>
        </Card>)
};

export default Chart;