import React, { useState, useEffect } from "react";
import StyledButton from "./styles/Button.styled";
import updateConfig from "../utils/updateConfig";
import getConfig from "../utils/getConfig";
import ConfigField from "./ConfigField";

function Config() {
  // Data fetched from API
  const [configData, setConfigData] = useState({});
  const [formData, setFormData] = useState({});
  const [dataSent, setDataSent] = useState(false);
  const getCurrentConfig = async () => {
    const data = await getConfig();
    setConfigData(data.result[0]);
  };
  useEffect(() => {
    console.log("go");
    getCurrentConfig();
  }, []);

  async function submitConfig(data) {
    const resultConfig = await updateConfig(data);
    // setDataSent(true);
    // console.log("complete");
    // console.log(resultConfig);
    getCurrentConfig();
  }

  return (
    <div>
      {/* <p>{configData.initial_cost}</p> */}
      <form>
        <ConfigField
          label="Tree initial cost: "
          currentValue={configData.initial_cost}
          dollars={true}
          objKey="initial_cost"
          inputFn={(e) =>
            setFormData({ ...formData, initial_cost: e.target.value })
          }
        />
        <ConfigField
          label="Tree monthly upkeep cost: "
          currentValue={configData.upkeep_cost}
          dollars={true}
          objKey="upkeep_cost"
          inputFn={(e) =>
            setFormData({ ...formData, upkeep_cost: e.target.value })
          }
        />
        <ConfigField
          label="Tree annual carbon offset: "
          currentValue={configData.annual_offset}
          co2={true}
          inputFn={(e) =>
            setFormData({ ...formData, annual_offset: e.target.value })
          }
        />
        <ConfigField
          label="Years for tree to fully grow: "
          currentValue={configData.years_to_grow}
          years={true}
          inputFn={(e) =>
            setFormData({ ...formData, years_to_grow: e.target.value })
          }
        />

        <StyledButton type="button" onClick={() => submitConfig(formData)}>
          submit config
        </StyledButton>
      </form>
    </div>
  );
}

export default Config;
