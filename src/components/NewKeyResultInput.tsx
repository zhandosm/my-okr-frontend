import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';
import React, { FunctionComponent, MouseEvent, useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

interface NewKeyResultBody {
    projectId: string | string[] | undefined;
	objectiveId: string | string[] | undefined;
	keyResultId: string | string[] | undefined;
    title: string;
    description: string;
}

const NewObjectiveInput: FunctionComponent = () =>{
    const queryClient = useQueryClient();
    const router = useRouter();
    const [keyResultTitle, setKeyResultTitle] = useState("");
    const { mutate: addObjective, isLoading } = useMutation(
        newKeyResult => {
            const axiosConfig:AxiosRequestConfig = { withCredentials: true };
            return axios.post(`${process.env.API_HOST}/keyresults`, newKeyResult, axiosConfig)
        },
        {
            onSuccess: async () => {
                setKeyResultTitle("");
                queryClient.refetchQueries(['keyResults', { objectiveId: router.query.objectiveId }]);
            },
            onError: () => alert("Something went wrong while creating new key result")
        }
    );
    
    
    const handleSubmitToDo = (e:React.FormEvent) => {
        e.preventDefault();
        if(!keyResultTitle) return alert("Key Result can't be empty")
        const keyResultBody:NewKeyResultBody = {
            projectId: router.query.projectId,
            objectiveId: router.query.objectiveId,
            keyResultId: router.query.keyResultId,
            title: keyResultTitle,
            description: '',
        }
        addObjective(keyResultBody);
    };
    
    return (
        <form className="flex items-center" onSubmit={handleSubmitToDo}>
            <input
                disabled={isLoading}
                value={keyResultTitle}
                onChange={(e:React.FormEvent<HTMLInputElement>)=>setKeyResultTitle(e.currentTarget.value)}
                className='rounded-lg bg-plainwhite text-moblack font-normal px-5 py-3 flex justify-between items-center transition-all active:drop-shadow max-w-full w-full focus:outline-mogreen'
                placeholder="+ New Key Result"/>
        </form>
    );
};

export default NewObjectiveInput;