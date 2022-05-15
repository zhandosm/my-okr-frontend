import axios, { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query'

export const fetchKeyResults = async (objectiveId:string | string[] | undefined) => {
    const axiosConfig:AxiosRequestConfig = { withCredentials: true };
    const response = await axios.get(`${process.env.API_HOST}/objectives/${objectiveId}`, axiosConfig);
    const { data } = response;
    return data.keyResults;
}

export const useKeyResults = (objectiveId:string | string[] | undefined) => {
    return useQuery(['keyResults', { objectiveId: objectiveId }], () => fetchKeyResults(objectiveId), { enabled: !!objectiveId })
}