import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-hiring-system-backend.railway.app",
});

export default API;