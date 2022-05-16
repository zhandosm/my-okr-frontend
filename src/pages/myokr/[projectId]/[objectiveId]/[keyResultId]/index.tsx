import type { NextPage } from 'next';
import { CommonLayout } from '@components';
import { useToDos } from '@hooks';
import { useRouter } from 'next/router';

interface ToDoObj {
  keyResultId: string;
  objectiveId: string;
  projectId: string;
  status: number;
  title: string;
  userId: string;
  __v: number;
  _id: string;
}

const Page: NextPage = () => {
  const router = useRouter();
  const { data: toDosData, isLoading: toDosDataLoading } = useToDos(router.query.keyResultId);
  return (
    <CommonLayout>
      Key Result Page
      Scrum Board
    </CommonLayout>
  )
}

export default Page
