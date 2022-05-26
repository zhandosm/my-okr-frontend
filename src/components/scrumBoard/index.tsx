import React, { FunctionComponent } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
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
    const onDragEnd = (result:any) => {
      console.log(result)
    }
    return <div className="h-full w-full flex justify-between space-x-4">
      <DragDropContext onDragEnd={onDragEnd}>
        <BoardColumn key={0} status="0" toDos={boardData['0']}/>
        <BoardColumn key={1} status="1" toDos={boardData['1']}/>
        <BoardColumn key={2} status="2" toDos={boardData['2']}/>
      </DragDropContext>
    </div>
};