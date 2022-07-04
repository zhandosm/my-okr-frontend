import React, { FunctionComponent, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateToDoRequest } from '@hooks';
import { ToDoObj, BoardColumn } from './BoardColumn';
import { useQueryClient, useMutation } from 'react-query';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const [tempPrevState, setTempPrevState] = useState(null);
  const { mutate: updateToDo  } = useMutation(
    updateParams => updateToDoRequest(updateParams.toDoId, updateParams.body),
    {
        onMutate: (updatedToDo) => {
            queryClient.setQueryData(['toDos', { keyResultId: router.query.keyResultId }], (prev) => {
                const data = prev;
                setTempPrevState("not null")
                console.log(tempPrevState)
                let oldToDo = null;
                data[0] = data[0].filter((toDoObj:any)=> {
                  if(toDoObj._id===updatedToDo.toDoId){
                    oldToDo = toDoObj;
                    return false;
                  }else{
                    return true;
                  }
                });
                data[1] = data[1].filter((toDoObj:any)=> {
                  if(toDoObj._id===updatedToDo.toDoId){
                    oldToDo = toDoObj;
                    return false;
                  }else{
                    return true;
                  }
                });
                data[2] = data[2].filter((toDoObj:any)=> {
                  if(toDoObj._id===updatedToDo.toDoId){
                    oldToDo = toDoObj;
                    return false;
                  }else{
                    return true;
                  }
                });
                oldToDo.status = updatedToDo.body.status;
                data[updatedToDo.body.status] = [...data[updatedToDo.body.status], oldToDo]
                return data;
            });
        },
        onError: () => {
            queryClient.setQueryData(['toDos', { keyResultId: router.query.keyResultId }], (prev) => {
              return tempPrevState;
          });
        },
        onSuccess: () => setTempPrevState(null)
    }
);
  
  const onDragEnd = async (result:any) => {
    const { destination, source, draggableId: toDoId } = result;
    if(!destination) return;
    if(destination.droppableId===source.droppableId) return;
    const body = { status: destination.droppableId };
    const updateParams = { toDoId, body };
    updateToDo(updateParams);
  }
  return <div className="h-full w-full flex justify-between space-x-4">
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardColumn key={0} status="0" toDos={boardData['0']}/>
      <BoardColumn key={1} status="1" toDos={boardData['1']}/>
      <BoardColumn key={2} status="2" toDos={boardData['2']}/>
    </DragDropContext>
  </div>
};