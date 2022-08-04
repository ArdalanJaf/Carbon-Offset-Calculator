import { API_URL } from "../config/API_URL";
import axios from "axios";

// Send form to back-end.
const sendFormData = async (payload) => {
  try {
    const result = await axios.post(
      API_URL + "/calculate",
      JSON.stringify(payload)
    );
    console.log(result);

    // notify user that API is down, advise to email me.
    if (result.data.status === 0) {
      alert("API error: " + result);

      // notify user of errors
    } else {
      console.log("data sent");
    }
  } catch (error) {
    alert("API down " + error);
    // console.log(error);
    // console.log("more specific: ", error.response.data);
  }
};

export default sendFormData;
