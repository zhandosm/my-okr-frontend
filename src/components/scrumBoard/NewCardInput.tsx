import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useState } from 'react';
import { useMutation } from 'react-query';

interface NewToDoBody {
    projectId: string | string[] | undefined;
	objectiveId: string | string[] | undefined;
	keyResultId: string | string[] | undefined;
	title: string;
}

const NewCardInput: FunctionComponent = () =>{
    const mutation = useMutation(newTodo => {
        const axiosConfig:AxiosRequestConfig = { withCredentials: true };
        return axios.post(`${process.env.API_HOST}/todos`, newTodo, axiosConfig)
    });
    const router = useRouter();
    const [toDotitle, setToDoTitle] = useState("");
    const handleSubmitToDo = (e:React.FormEvent) => {
        e.preventDefault();
        const toDoBody:NewToDoBody = {
            projectId: router.query.projectId,
            objectiveId: router.query.objectiveId,
            keyResultId: router.query.keyResultId,
            title: toDotitle
        }
        mutation.mutate(toDoBody);
    };
    mutation.isSuccess 
    return (
        <form onSubmit={handleSubmitToDo}>
            <input
                disabled={mutation.isLoading}
                value={toDotitle}
                onChange={(e:React.FormEvent<HTMLInputElement>)=>setToDoTitle(e.currentTarget.value)}
                className="flex items-center my-2 p-2 rounded-lg cursor-pointer transition-all border border-modarkgrey opacity-40 hover:opacity-80 focus:opacity-100 w-full disabled:opacity-20"
                placeholder="Add new card"/>
        </form>
    );
};

export default NewCardInput;