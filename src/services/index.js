import axios from "axios";

export const meuNovoLivroApi = axios.create({
  baseURL: "http://192.168.100.9:1337/",
});
