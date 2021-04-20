import axios from 'axios';
import { url } from '../../constants';

export const getVideogames = async () => {
    try {
        const response = await axios.get(`${url}/videogames`);
        return response.data.items;
    } catch(error) {
        console.error(error);
    }
}