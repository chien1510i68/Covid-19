import axios from "axios";

const URL = 'http://localhost:5000';

export const fetchDatas = () => axios.get(`${URL}/datas`);