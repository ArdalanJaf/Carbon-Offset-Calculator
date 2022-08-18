import React, { useState, useEffect } from "react";
import StyledButton from "./styles/Button.styled";
import updateConfig from "../utils/updateConfig";
import getConfig from "../utils/getConfig";
import resetConfig from "../utils/resetConfig";
import ConfigField from "./ConfigField";
import StyledConfig from "./styles/Config.Styled";

function Config() {
  // Data fetched from API
  const [configData, setConfigData] = useState({});
  const [formData, setFormData] = useState({});

  // Updates displayed local config based on config data stored in database.
  const getCurrentConfig = async () => {
    const data = await getConfig();
    setConfigData(data.result[0]);
  };

  // Get displayed config on init.
  useEffect(() => {
    getCurrentConfig();
    // contactAPI(resetConfig()) //use this instead for demo purposes
  }, []);

  // Update or reset config data in database + update displayed config data
  async function contactAPI(fn, data) {
    await fn(data); // update or reset config
    getCurrentConfig(); // update local config to match
  }

  return (
    <StyledConfig>
      <h2>ADMIN TREE CONFIG</h2>
      {/* <p>{configData.initial_cost}</p> */}
      <form>
        <ConfigField
          label="Initial cost: "
          currentValue={configData.initial_cost}
          // value={formData.initial_cost}
          dollars={true}
          objKey="initial_cost"
          inputFn={(e) =>
            setFormData({ ...formData, initial_cost: e.target.value })
          }
        />
        <ConfigField
          label="Monthly upkeep cost: "
          currentValue={configData.upkeep_cost}
          // value={formData.upkeep_cost}
          dollars={true}
          objKey="upkeep_cost"
          inputFn={(e) =>
            setFormData({ ...formData, upkeep_cost: e.target.value })
          }
        />
        <ConfigField
          label="Annual carbon offset: "
          currentValue={configData.annual_offset}
          // value={formData.annual_offset}
          co2={true}
          inputFn={(e) =>
            setFormData({ ...formData, annual_offset: e.target.value })
          }
        />
        <ConfigField
          label="Years to fully grow: "
          currentValue={configData.years_to_grow}
          // value={formData.years_to_grow}
          years={true}
          inputFn={(e) =>
            setFormData({ ...formData, years_to_grow: e.target.value })
          }
        />
        <div>
          <StyledButton
            type="button"
            onClick={() => contactAPI(updateConfig, formData)}
          >
            Update Config
          </StyledButton>
          <StyledButton type="button" onClick={() => contactAPI(resetConfig)}>
            Default Config
          </StyledButton>
        </div>
      </form>
    </StyledConfig>
  );
}

export default Config;
