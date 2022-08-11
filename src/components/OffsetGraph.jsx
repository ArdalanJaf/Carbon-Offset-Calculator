import React from "react";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList,
  Label,
  CartesianGrid,
  Text,
} from "recharts";

function OffsetGraph() {
  const resultData = useSelector((state) => state.resultData);
  const data = resultData.graphData;

  return (
    <>
      <h2> Carbon Offsets</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="offsetGradient" x1="1" x2="0" y1="0" y2="0">
              <stop offset="0%" stopColor="#3894ff" stopOpacity={1} />
              <stop offset="175%" stopColor="#3894ff" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient
              id="emissionsGradient"
              x1="0"
              x2="1.5"
              y1="0"
              y2="1"
            >
              <stop offset="0%" stopColor="red" stopOpacity={0.5} />
              <stop offset="50%" stopColor="red" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area
            dataKey="offset"
            stroke="#3894ff"
            fill="url(#offsetGradient)"
            // fillOpacity={1}
          />
          <Area
            dataKey="emissions"
            stroke="red"
            // fill="url(#emissionsGradient)"
            fill="none"
          ></Area>
          <XAxis
            dataKey="date"
            tickFormatter={(date) => {
              return `${date.slice(0, 3)}-${date.slice(-2)}`;
            }}
          />
          <YAxis dataKey="offset" axisLine={false} tickLine={false} />
          <Tooltip />
          <CartesianGrid vertical={false} />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default OffsetGraph;
