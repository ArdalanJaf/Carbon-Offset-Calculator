import React from "react";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import numeral from "numeral";
import unixToMY from "../../utils/unixToMY";
import GraphTooltip from "./GraphTooltip";
import StyledGraph from "../styles/Graph.styled";

function ExpenditureGraph() {
  const resultData = useSelector((state) => state.resultData);
  const data = resultData.graphData;

  return (
    <StyledGraph>
      <ResponsiveContainer width="99%" height="99%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="25%" stopColor="#e0a604" stopOpacity={1} />
              <stop offset="100%" stopColor="#f5ea4e" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area dataKey="expenditure" stroke="#e0a604" fill="url(#gradient)" />

          <XAxis
            dataKey="date"
            interval={Number((data.length / 6).toFixed(0))}
            tickFormatter={(date) => {
              return unixToMY(date);
            }}
            tickMargin="6"
          />

          <YAxis
            dataKey="expenditure"
            axisLine={false}
            tickLine={false}
            tickFormatter={(cost) => `$${numeral(cost).format("0,000a")}`}
          />

          <Tooltip content={<GraphTooltip />} />
          <CartesianGrid vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </StyledGraph>
  );
}

export default ExpenditureGraph;
