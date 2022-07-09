import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

interface NewToDoBody {
    projectId: string | string[] | undefined;
	objectiveId: string | string[] | undefined;
	keyResultId: string | string[] | undefined;
	title: string;
}

const NewCardInput: FunctionComponent = () =>{
    const queryClient = useQueryClient();
    const router = useRouter();
    const [toDotitle, setToDoTitle] = useState("");

    const { mutate: addToDo, isLoading  } = useMutation(
        newTodo => {
            const axiosConfig:AxiosRequestConfig = { withCredentials: true };
            return axios.post(`${process.env.API_HOST}/todos`, newTodo, axiosConfig)
        },
        {
            onSuccess: async (response) => {
                queryClient.setQueryData(['toDos', { keyResultId: router.query.keyResultId }], (prev) => {
                    setToDoTitle("");
                    const data = prev;
                    const toDoList = data['0'];
                    toDoList.push(response.data);
                    return data;
                });
            },
            onError: () => alert("Something went wrong while creating new item")
        }
    );
    
    
    const handleSubmitToDo = (e:React.FormEvent) => {
        e.preventDefault();
        if(!toDotitle) return alert("To Do can't be empty");
        const toDoBody:NewToDoBody = {
            projectId: router.query.projectId,
            objectiveId: router.query.objectiveId,
            keyResultId: router.query.keyResultId,
            title: toDotitle
        }
        addToDo(toDoBody);
    };
    
    return (
        <form onSubmit={handleSubmitToDo}>
            <input
                disabled={isLoading}
                value={toDotitle}
                onChange={(e:React.FormEvent<HTMLInputElement>)=>setToDoTitle(e.currentTarget.value)}
                className="flex items-center my-2 p-2 rounded-lg transition-all border border-modarkgrey opacity-40 hover:opacity-80 focus:opacity-100 w-full disabled:opacity-20 focus:outline-mogreen"
                placeholder="+ New Card"/>
        </form>
    );
};

export default NewCardInput;