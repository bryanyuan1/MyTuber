import axios from 'axios';
import keys from '../config/keys';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        maxResults: 5,
        key: keys.youtubeKey,
    }
});

export default youtube;