import Axios from "axios";

const accessToken = "Bearer " + localStorage.getItem("API_TOKEN");

const instance = Axios.create({
  baseURL:
    "https://8659e866-c03e-45d5-a713-14c3f8f0d831-dev.e1-us-east-azure.choreoapis.dev/vjmx/finalintegration/1.0.0/",
  headers: {
    Authorization: accessToken,
  },
});

export default instance;
