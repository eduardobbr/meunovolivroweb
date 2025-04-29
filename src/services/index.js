import axios from "axios";

export const meuNovoLivroApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/`,
});

