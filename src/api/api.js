import axios from "axios";

const api = axios.create({
 baseURL: "https://data.sandbox.directory.openbankingbrasil.org.br",
});

export default api