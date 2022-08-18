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
  ReferenceLine,
} from "recharts";
import GraphTooltip from "./GraphTooltip";
import unixToMY from "../../utils/unixToMY";
import StyledGraph from "../styles/Graph.styled";

function OffsetGraph() {
  const resultData = useSelector((state) => state.resultData);
  const data = resultData.graphData;

  return (
    <StyledGraph>
      <ResponsiveContainer width="99%" height="99%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="offsetGradient" x1="1" x2="0" y1="0" y2="0">
              <stop offset="10%" stopColor="#1c99ff" stopOpacity={1} />
              <stop offset="75%" stopColor="#1c99ff" stopOpacity={0.4} />
            </linearGradient>
          </defs>

          <Area
            dataKey="offset"
            stroke="#008bfc"
            fill="url(#offsetGradient)"
            // fillOpacity={1}
          />
          <ReferenceLine
            y={resultData.stats.monthlyEmissions}
            stroke="#f0353b"
            strokeWidth={3}
            ifOverflow="extendDomain"
            fill="none"
          />

          <XAxis
            dataKey="date"
            interval={Number((data.length / 6).toFixed(0))}
            tickFormatter={(date) => {
              return unixToMY(date);
            }}
            tickMargin="6"
          />

          <YAxis
            dataKey="offset"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}kg`}
          />
          <Tooltip
            content={
              <GraphTooltip
                type="offset"
                monthlyEmissions={resultData.stats.monthlyEmissions}
              />
            }
          />
          <CartesianGrid vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </StyledGraph>
  );
}

export default OffsetGraph;
