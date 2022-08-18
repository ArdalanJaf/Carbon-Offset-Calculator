import { API_URL } from "../config/API_URL";
import axios from "axios";

// Send form to back-end.
const getConfig = async () => {
  try {
    const result = await axios.get(API_URL + "/get_config");

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

export default getConfig;
