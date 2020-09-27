// getInitialComic.js
import axios from 'axios';
// make api call, using juno proxy, to get latest comic
const getLatestComic = axios({
    method: 'GET',
    url: 'http://proxy.hackeryou.com',
    dataResponse: 'json',
    params: {
        reqUrl: 'http://xkcd.com/info.0.json',
        xmlToJSON: false,
        useCache: false
    }
});

export default getLatestComic;