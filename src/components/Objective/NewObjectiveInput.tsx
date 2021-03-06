import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';
import React, { FunctionComponent, MouseEvent, useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

interface NewObjectiveBody {
    projectId: string | string[] | undefined;
    title: string;
    description: string;
} 

export const NewObjectiveInput: FunctionComponent = () =>{
    const queryClient = useQueryClient();
    const router = useRouter();
    const [objectiveTitle, setObjectiveTitle] = useState("");
    const { mutate: addObjective, isLoading } = useMutation(
        newObjective => {
            const axiosConfig:AxiosRequestConfig = { withCredentials: true };
            return axios.post(`${process.env.API_HOST}/objectives`, newObjective, axiosConfig)
        },
        {
            onSuccess: async () => {
                setObjectiveTitle("");
                queryClient.refetchQueries(['objectives', { projectId: router.query.projectId }]);
            },
            onError: () => alert("Something went wrong while creating new objective")
        }
    );
    
    
    const handleSubmitToDo = (e:React.FormEvent) => {
        e.preventDefault();
        if(!objectiveTitle) return alert("Objective can't be empty");
        const objectiveBody:NewObjectiveBody = {
            projectId: router.query.projectId,
            title: objectiveTitle,
            description: ''
        }
        addObjective(objectiveBody);
    };
    
    return (
        <form className="flex items-center" onSubmit={handleSubmitToDo}>
            <input
                disabled={isLoading}
                value={objectiveTitle}
                onChange={(e:React.FormEvent<HTMLInputElement>)=>setObjectiveTitle(e.currentTarget.value)}
                className="flex text-sm items-center my-2 p-1 w-full disabled:opacity-40 outline-mogreen rounded border border-modarkgrey opacity-40 hover:opacity-80 focus:opacity-100 focus:outline-mogreen transition-all "
                placeholder="+ New Objective"/>
        </form>
    );
};