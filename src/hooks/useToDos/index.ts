import axios, { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query'

export const fetchToDos = async (keyResultId:string | string[] | undefined) => {
    const axiosConfig:AxiosRequestConfig = { withCredentials: true };
    const response = await axios.get(`${process.env.API_HOST}/keyresults/${keyResultId}`, axiosConfig);
    const { data } = response;
    return data.toDos;
}

export const useToDos = (keyResultId:string | string[] | undefined) => {
    return useQuery(['toDos', { keyResultId: keyResultId }], () => fetchToDos(keyResultId), { enabled: !!keyResultId })
}