import axios from "axios";

export const meuNovoLivroApi = axios.create({
  // baseURL: "https://meu-novo-livro-lively-waterfall-4698.fly.dev/api/",
  baseURL: "http://127.0.0.1:8000/api/",
});
