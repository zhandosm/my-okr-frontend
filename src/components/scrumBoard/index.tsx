import React, { FunctionComponent } from 'react';
import { ToDoObj, BoardColumn } from './BoardColumn';

export interface ClassifiedToDos {
  0: ToDoObj[];
  1: ToDoObj[];
  2: ToDoObj[];
}

interface BoardDataObj {
    boardData: ClassifiedToDos
}

export const ScrumBoard: FunctionComponent<BoardDataObj>  = ({ boardData }) => {
    return <div className="h-full w-full flex justify-between space-x-4">
       <BoardColumn status="0" toDos={boardData['0']}/>
       <BoardColumn status="1" toDos={boardData['1']}/>
       <BoardColumn status="2" toDos={boardData['2']}/>
    </div>
};