import axios, { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query'

export const fetchProjects = async () => {
    const axiosConfig:AxiosRequestConfig = { withCredentials: true };
    const response = await axios.get(`${process.env.API_HOST}/projects`, axiosConfig);
    const { data } = response;
    return data;
}
interface Callback {
    (data:any): void
}

export const useProjects = () => {
    return useQuery(['projects'], () => fetchProjects())
}