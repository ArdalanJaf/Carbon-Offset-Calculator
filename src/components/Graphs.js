import React from "react";
import { useSelector } from "react-redux";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

function Graphs() {
  const resultData = useSelector((state) => state.resultData);
  const data = resultData.graphData;
  //   console.log(data);

  return (
    <>
      <h2> graph</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <Line dataKey="offset" />
          <XAxis dataKey="monthIndex" />
          <YAxis dataKey="offset" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Graphs;
