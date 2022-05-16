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
    return <div>
       <BoardColumn title="To-Do" toDos={boardData['0']}/>
       <BoardColumn title="In-Progress" toDos={boardData['1']}/>
       <BoardColumn title="Done" toDos={boardData['2']}/>
    </div>
};