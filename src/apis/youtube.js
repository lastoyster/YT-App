import axios from 'axios';

const KEY ='AIzaSyAiOfXImn5vZAi3KM3rdMkIawzLpnIRDow';

export default axios.create({
    baseUrl: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});