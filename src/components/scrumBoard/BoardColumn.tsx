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
    status: string;
    toDos: ToDoObj[];
}

interface StatusTitleMap {
    '0': string;
    '1': string;
    '2': string;
}

const statusTitleMap:StatusTitleMap = {
    '0': 'To Do',
    '1': 'In Progress',
    '2': 'Done'
}

export const BoardColumn: FunctionComponent<BoardColumnDataObj>  = ({ toDos, status }) => {
    return <div className="bg-mowhite rounded-lg p-3.5 w-1/3 md:w-full">
        <h5 className='font-medium'>{statusTitleMap[status]}</h5>
        <div className=''>
            {toDos.map((toDoObj, i)=>{
                return <div key={i} className="my-2 p-2 bg-molightgrey rounded-lg cursor-pointer hover:text-mogreen active:drop-shadow transition-all">{toDoObj.title}</div>
            })}
        </div>
    </div>
};