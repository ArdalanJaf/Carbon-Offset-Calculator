import { API_URL } from "../config/API_URL";
import axios from "axios";

// Send form to back-end.
const resetConfig = async () => {
  try {
    const result = await axios.post(API_URL + "/reset_config");

    if (result.data.status === 0) {
      console.log("API error: " + result);
    } else {
      // console.log(result.data);
      return result.data;
    }
  } catch (error) {
    console.log("API down " + error);
  }
};

export default resetConfig;
