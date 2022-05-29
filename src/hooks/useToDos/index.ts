import axios, { AxiosRequestConfig } from 'axios';
import { queryCache, useMutation, useQuery } from 'react-query'


/* -------- START Fetch to dos -------- */
export const fetchToDos = async (keyResultId:string | string[] | undefined) => {
    const axiosConfig:AxiosRequestConfig = { withCredentials: true };
    const response = await axios.get(`${process.env.API_HOST}/keyresults/${keyResultId}`, axiosConfig);
    const { data } = response;
    return data.toDos;
}

export const useToDos = (keyResultId:string | string[] | undefined) => {
    return useQuery(['toDos', { keyResultId: keyResultId }], () => fetchToDos(keyResultId), { enabled: !!keyResultId })
}
/* -------- END Fetch to dos -------- */


/* -------- START Fetch to dos -------- */
interface ToDoUpdateBody {
    title?: string;
    status?: string | number
}

export const updateToDoRequest = async (toDoId: string, body: ToDoUpdateBody,) => {
    const axiosConfig:AxiosRequestConfig = { withCredentials: true };
    const response = await axios.patch(`${process.env.API_HOST}/todos/${toDoId}`, body, axiosConfig);
    console.log(response.data)
    return response.data;
}

// export const useUpdateToDo = async (toDoId: string, body: ToDoUpdateBody, callback: any) => {
//     return useMutation(
//         () => updateToDoRequest(toDoId, body),
//         {
//             onSuccess: () => callback()
//         }
//     )
// }
/* -------- END Fetch to dos -------- */