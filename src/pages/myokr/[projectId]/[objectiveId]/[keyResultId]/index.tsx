import type { NextPage } from 'next';
import { CommonLayout, Loader, ScrumBoard } from '@components';
import { useToDos } from '@hooks';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

const CenteredContainer: FunctionComponent = ({children}) => <div className="flex justify-center items-center h-full">{children}</div>

const Page: NextPage = () => {
  const router = useRouter();
  const { data: toDosData, isLoading: toDosDataLoading } = useToDos(router.query.keyResultId);
  return (
    <CommonLayout>
      { toDosDataLoading && <CenteredContainer><Loader style={{maxWidth: "100px"}}/></CenteredContainer>}
      { toDosData && <ScrumBoard boardData={toDosData}/> }
    </CommonLayout>
  )
}

export default Page
