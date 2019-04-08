import axios from 'axios';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyA3ffmrZDOOfNx8huuIo8ld0kxd1dvqPio',
    }
});

export default youtube;