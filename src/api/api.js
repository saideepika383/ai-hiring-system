import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-hiring-system-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;