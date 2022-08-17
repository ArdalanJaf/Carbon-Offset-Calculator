function GraphLabel({ monthlyEmissions, color }) {
  return (
    <text
      className="recharts-text recharts-label"
      // y={50}
      // x={140}
      // textAnchor="middle"
      fontWeight={600}
      fill={color}
    >
      {monthlyEmissions}kgCO
      <tspan dy={3} fontSize={12}>
        2
      </tspan>
    </text>
  );
}

export default GraphLabel;
