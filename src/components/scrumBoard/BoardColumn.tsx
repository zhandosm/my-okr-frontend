import React, { FunctionComponent } from 'react';

export interface ToDoObj {
    keyResultId: string;
    objectiveId: string;
    projectId: string;
    status: number;
    title: string;
    userId: string;
    __v: number;
    _id: string;
}

interface BoardColumnDataObj {
    title: string;
    toDos: ToDoObj[];
}

export const BoardColumn: FunctionComponent<BoardColumnDataObj>  = ({ toDos }) => {
    console.log(toDos)
    return <div>
       
    </div>
};