import axios from "axios";

const api = axios.create({
 baseURL: "https://data.sandbox.directory.openbankingbrasil.org.br/participants",
});

export default api