import axios, { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query'

export const fetchObjectives = async (projectId:string) => {
    const axiosConfig:AxiosRequestConfig = { withCredentials: true };
    const response = await axios.get(`${process.env.API_HOST}/projects`, axiosConfig);
    const { data } = response;
    return data;
}

export const useObjectives = (projectId:string) => {
    return useQuery(['objectives'], () => fetchObjectives(projectId))
}