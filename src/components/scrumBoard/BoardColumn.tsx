import React, { FunctionComponent } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

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

interface ToDoProps {
    title: string;
    id: string;
    index: number;
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


export const ToDo: FunctionComponent<ToDoProps>  = ({id, index, title}) => { 
    return <Draggable draggableId={id} index={index}>
        {(provided, snapshot)=><div
            {...provided.draggableProps}
            ref={provided.innerRef}
            className={`flex items-center my-2 p-2 bg-molightgrey rounded-lg cursor-pointer ${snapshot.isDragging ? "drop-shadow" : ""} transition-all`}>
                <span className="mr-2" {...provided.dragHandleProps}>
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M10 14C10 15.1046 9.10457 16 8 16C6.89543 16 6 15.1046 6 14C6 12.8954 6.89543 12 8 12C9.10457 12 10 12.8954 10 14ZM4 14C4 15.1046 3.10457 16 2 16C0.895431 16 0 15.1046 0 14C0 12.8954 0.895431 12 2 12C3.10457 12 4 12.8954 4 14ZM10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8ZM2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10ZM10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2ZM4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z" fill="black"/>
                    </svg>
                </span>
                {title}
            </div>}
    </Draggable>
}

export const BoardColumn: FunctionComponent<BoardColumnDataObj>  = ({ toDos, status }) => {
    return <div className="bg-mowhite rounded-lg p-3.5 w-1/3 md:w-full">
        <h5 className='font-medium'>{statusTitleMap[status]}</h5>
        <Droppable droppableId={status}>
           {(provided)=><div ref={provided.innerRef} {...provided.droppableProps} className='h-full'>
                {toDos.map((toDoObj, i)=>{
                    return <ToDo
                        id={toDoObj._id}
                        key={i}
                        index={i}
                        title={toDoObj.title}
                    />
                })}
                {provided.placeholder}
            </div>}
        </Droppable>
    </div>
};