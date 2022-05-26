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
        {(provided)=><div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="my-2 p-2 bg-molightgrey rounded-lg cursor-pointer">
                {title}
            </div>}
    </Draggable>
}

export const BoardColumn: FunctionComponent<BoardColumnDataObj>  = ({ toDos, status }) => {
    return <div className="bg-mowhite rounded-lg p-3.5 w-1/3 md:w-full">
        <h5 className='font-medium'>{statusTitleMap[status]}</h5>
        <Droppable droppableId={status}>
           {(provided)=><div ref={provided.innerRef} {...provided.droppableProps} className=''>
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