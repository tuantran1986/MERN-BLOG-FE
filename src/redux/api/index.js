import axios from "axios";

const URL = 'http://localhost:5000';

// export const fetchAllPosts = () => axios.get(`${URL}/posts`);
export const fetchAllPosts = () => {
    console.log('3...run api: fetchAllPosts');

    return axios.get(`${URL}/posts`)
};

export const createPost = (payload) => {
    console.log('3...run api: createPost');

    return axios.post(`${URL}/posts/create`, payload);
};