import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8080'
})

/* configuração do axios para requisitar o backend */