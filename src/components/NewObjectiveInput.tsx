import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';
import React, { FunctionComponent, MouseEvent, useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

interface NewObjectiveBody {
    projectId: string | string[] | undefined;
    title: string;
    description: string;
} 

const NewObjectiveInput: FunctionComponent = () =>{
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
                className="flex text-sm items-center my-2 p-1 cursor-pointer transition-all w-full disabled:opacity-40 outline-mogreen"
                placeholder="+ New Objective"/>
        </form>
    );
};

export default NewObjectiveInput;