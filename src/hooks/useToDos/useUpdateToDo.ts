import axios, { AxiosRequestConfig } from 'axios';

/* -------- START Update to dos -------- */
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

export const useUpdateToDo = async (toDoId: string, body: ToDoUpdateBody, callback: any) => {
    return useMutation(
        () => updateToDoRequest(toDoId, body),
        {
            onSuccess: () => callback()
        }
    )
}
/* -------- END Update to dos -------- */