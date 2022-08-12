import unixToMY from "../utils/unixToMY";
import numeral from "numeral";

function GraphTooltip({ active, payload, label, type }) {
  if (active) {
    let color0 = `color:${payload[0].color};`;
    return (
      <div className="tooltip">
        <h4>{unixToMY(label, true, true)}</h4>
        {type === "offset" ? (
          <>
            <p>
              Offset: {payload[0].value} kgCO<sub>2</sub>
            </p>
            <p>
              Emissions: {payload[1].value} kgCO<sub>2</sub>
            </p>
          </>
        ) : (
          <p>
            Expenditure: ${numeral(payload[0].value).format("0,000,000.00")}
          </p>
        )}

        {/* <p>{JSON.stringify(payload, null, 2)}</p> */}
      </div>
    );
  }
}

export default GraphTooltip;
