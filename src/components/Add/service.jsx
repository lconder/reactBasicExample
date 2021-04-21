import axios from 'axios';
import { url } from '../../constants';

export const save = async (data) => {
    console.log(data);
    try {
        const res = await axios.post(`${url}/videogames`, data);
        return res.data;
    } catch(e) {
        console.error(e);
        return false;
    }
}