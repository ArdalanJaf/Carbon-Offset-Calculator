import { API_URL } from "../config/API_URL";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { setGraphData } from "../app/graphDataSlice";

// Send form to back-end.
const SendFormData = async (payload) => {
  // const dispatch = useDispatch();

  try {
    const result = await axios.post(API_URL + "/calculate", payload);

    if (result.data.status === 0) {
      console.log("API error: " + result);
    } else {
      console.log(result.data.graphData);
      return result.data.graphData;
      // dispatch(setGraphData(result.data.graphData));
    }
  } catch (error) {
    console.log("API down " + error);
  }
};

export default SendFormData;
