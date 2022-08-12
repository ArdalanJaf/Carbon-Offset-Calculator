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
import numeral from "numeral";
import unixToMY from "../utils/unixToMY";
import GraphTooltip from "./GraphTooltip";

function ExpenditureGraph() {
  const resultData = useSelector((state) => state.resultData);
  const data = resultData.graphData;

  return (
    <>
      <h2>Cumulative Expenditure</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="green" stopOpacity={1} />
              <stop offset="175%" stopColor="green" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <Area
            dataKey="expenditure"
            stroke="green"
            fill="url(#gradient)"
            // fillOpacity={1}
          />

          <XAxis
            axisLine={false}
            dataKey="date"
            tickFormatter={(date) => {
              return unixToMY(date);
            }}
          />

          <YAxis
            dataKey="expenditure"
            axisLine={false}
            tickLine={false}
            tickFormatter={(cost) => `$${numeral(cost).format("0,000,000")}`}
          />

          <Tooltip content={<GraphTooltip />} />
          <CartesianGrid vertical={false} />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default ExpenditureGraph;
