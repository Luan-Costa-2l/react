const BASE = 'https://newsdata.io/api/1/news?apikey=pub_137378a678b009e233cd6402c00d1c3a60878&category=technology&country=br&language=pt';

export const api = {
    getAllNews: async () => {
        let response = await fetch(BASE);
        let json = await response.json();
        return json;
    }
}