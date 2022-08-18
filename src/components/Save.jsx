import React from "react";
import StyledSaves from "./styles/Saves.Styled";
import SaveIcon from "./icons/SaveIcon";
import DownloadIcon from "./icons/DownloadIcon";

function Save({ stateSave, setStateSave, reset }) {
  const dataInStorage = () => {
    return localStorage.get("simulatorData") === null ? false : true;
  };

  return (
    <StyledSaves>
      <div
        type="button"
        disabled={dataInStorage ? false : true}
        style={
          dataInStorage
            ? { opacity: ".8", cursor: "pointer" }
            : { opacity: "0.2", cursor: "normal" }
        }
        onClick={() => {
          let pData = JSON.parse(localStorage.getItem("simulatorData"));
          reset(pData);
        }}
      >
        <DownloadIcon />
      </div>
      <div
        type="button"
        disabled={stateSave ? false : true}
        style={
          stateSave
            ? { opacity: ".8", cursor: "pointer" }
            : { opacity: "0.2", cursor: "normal" }
        }
        onClick={() => {
          let sData = JSON.stringify(stateSave);
          localStorage.setItem("simulatorData", sData);
          setStateSave(null);
        }}
      >
        <SaveIcon />
      </div>
    </StyledSaves>
  );
}

export default Save;
