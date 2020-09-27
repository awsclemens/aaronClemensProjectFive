// getFirstComic.js
import axios from 'axios';
// make api call, using juno proxy, to get latest comic
const getFirstComic = axios({
    method: 'GET',
    url: 'http://proxy.hackeryou.com',
    dataResponse: 'json',
    params: {
        reqUrl: 'http://xkcd.com/1/info.0.json',
        xmlToJSON: false,
        useCache: false
    }
});

export default getFirstComic;