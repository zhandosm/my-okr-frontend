import type { NextPage } from 'next';
import { CommonLayout, ScrumBoard } from '@components';
import { useToDos } from '@hooks';
import { useRouter } from 'next/router';



const Page: NextPage = () => {
  const router = useRouter();
  const { data: toDosData, isLoading: toDosDataLoading } = useToDos(router.query.keyResultId);
  return (
    <CommonLayout>
      <ScrumBoard boardData={toDosData}/>
    </CommonLayout>
  )
}

export default Page
