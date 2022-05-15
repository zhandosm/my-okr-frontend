import axios, { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query'

export const fetchObjectives = async (projectId:string | string[] | undefined) => {
    const axiosConfig:AxiosRequestConfig = { withCredentials: true };
    const response = await axios.get(`${process.env.API_HOST}/projects/${projectId}`, axiosConfig);
    const { data } = response;
    return data.objectives;
}

export const useObjectives = (projectId:string | string[] | undefined) => {
    return useQuery(['objectives', { projectId: projectId }], () => fetchObjectives(projectId), { enabled: !!projectId })
}