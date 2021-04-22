import axios from 'axios';
import { url } from '../../constants';

export const save = async (data) => {
    try {
        const res = await axios.post(`${url}/videogames`, JSON.stringify(data));
        console.log(res.data);
        return res.data;
    } catch(e) {
        console.error(e);
        return false;
    }
}