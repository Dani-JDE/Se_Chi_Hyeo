import axios from "axios";

const http = axios.create({
  baseURL: "https://i7a508.p.ssafy.io/",
  headers: { "content-type": "application/json" },
});

http.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export default http;
