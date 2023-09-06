import axios from "axios";

export const meuNovoLivroApi = axios.create({
  baseURL: "http://localhost:1337/",
});
