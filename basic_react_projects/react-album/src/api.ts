import axios from "axios";

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const api =  {
    getAllAlbums: async () => {
        const response = await http('/albums');
        return response.data;
    },
    getAlbum: async (id:string) => {
        const response = await http(`/albums/${id}`);
        return response.data;
    },
    getAllPhotos: async (id: string) => {
        const response = await http(`/albums/${id}/photos`);
        return response.data;
    },
    getPhoto: async (id: string) => {
        const response = await http(`/photos/${id}`);
        return response.data;
    }
};