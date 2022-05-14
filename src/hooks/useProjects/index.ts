import axios, { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query'

const fetchProject = async (id:string) => {
    const axiosConfig:AxiosRequestConfig = { withCredentials: true };
    const response = await axios.get(`${process.env.API_HOST}/projects/${id}`, axiosConfig);
    const { data } = response;
    return data;
}

interface Callback {
    (data:any): void
}

const useProjects = (id:string, callback:Callback) => {
    return useQuery(['project', { projectId: id }], () => fetchProject(id), {
        enabled: false,
        onSuccess: (data) => callback(data),
    } )
}

export { useProjects, fetchProject }