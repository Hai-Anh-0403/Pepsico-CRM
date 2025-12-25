import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "T1", revenue: 110 },
    { month: "T2", revenue: 150 },
    { month: "T3", revenue: 180 },
    { month: "T4", revenue: 160 },
    { month: "T5", revenue: 220 },
    { month: "T6", revenue: 260 },
];

const Chart = ({ title }) => {
    return (
        <div className="chart-box">
            <h3>{title}</h3>

            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#0046be"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
