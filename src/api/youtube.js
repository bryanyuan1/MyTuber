import axios from 'axios';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        maxResults: 5,
        key: 'AIzaSyA3ffmrZDOOfNx8huuIo8ld0kxd1dvqPio',
    }
});

export default youtube;