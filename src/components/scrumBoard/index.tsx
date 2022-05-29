import React, { FunctionComponent } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateToDoRequest } from '@hooks';
import { ToDoObj, BoardColumn } from './BoardColumn';
import { useQueryClient, QueryClient } from 'react-query';

export interface ClassifiedToDos {
  0: ToDoObj[];
  1: ToDoObj[];
  2: ToDoObj[];
}

interface BoardDataObj {
    boardData: ClassifiedToDos
}

export const ScrumBoard: FunctionComponent<BoardDataObj>  = ({ boardData }) => {
  const queryClient = useQueryClient();
  console.log(queryClient)
    const onDragEnd = async (result:any) => {
      const { destination, source, draggableId: toDoId } = result;
      if(!destination) return;
      if(destination.droppableId===source.droppableId) return;
      const body = { status: destination.droppableId };
      console.log(body)
      updateToDoRequest(toDoId, body)
        .then(
          data => queryClient.refetchQueries()//console.log(useQueryClient)
        )
        .catch(err=>console.log(err));
    }
    return <div className="h-full w-full flex justify-between space-x-4">
      <DragDropContext onDragEnd={onDragEnd}>
        <BoardColumn key={0} status="0" toDos={boardData['0']}/>
        <BoardColumn key={1} status="1" toDos={boardData['1']}/>
        <BoardColumn key={2} status="2" toDos={boardData['2']}/>
      </DragDropContext>
    </div>
};