import React, { FunctionComponent, useState } from 'react';

const NewCardInput: FunctionComponent = () =>{
    // const mutation = useMutation(newTodo => {
    //     return axios.post('/todos', newTodo)
    // });
    const [toDotitle, setToDoTitle] = useState("");
    const handleSubmitToDo = (e:React.FormEvent) => {
        e.preventDefault();
        alert(toDotitle);
    };
    return (
        <form onSubmit={handleSubmitToDo}>
            <input
                value={toDotitle}
                onChange={(e:React.FormEvent<HTMLInputElement>)=>setToDoTitle(e.currentTarget.value)}
                className="flex items-center my-2 p-2 rounded-lg cursor-pointer transition-all border border-modarkgrey opacity-40 hover:opacity-80 focus:opacity-100 w-full"
                placeholder="Add new card"/>
        </form>
    );
};

export default NewCardInput;