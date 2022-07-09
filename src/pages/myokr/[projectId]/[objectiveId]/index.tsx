import type { NextPage } from 'next';
import { CommonLayout, KeyResultCard, Loader, NewKeyResultInput } from '@components';
import { useKeyResults } from '../../../../hooks/useKeyResults/index';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

interface KeyResultObj {
	description: string;
  objectiveId: string;
  projectId: string;
  title: string;
  userId: string;
  __v: number;
  _id: string;
}

type keyResultListProps = {
  keyResults: KeyResultObj[]
}

const CenteredContainer: FunctionComponent = ({children}) => <div className="flex justify-center items-center h-full">{children}</div>
const LoadingKeyResultsList: FunctionComponent = () => <CenteredContainer> <Loader style={{maxWidth: "100px"}}/> </CenteredContainer>;
const KeyResultsList: FunctionComponent<keyResultListProps> = ({ keyResults }) => {
  const router = useRouter();

  const redirectToKeyResult = (id: string):void => {
		router.push(`/myokr/${router.query.projectId}/${router.query.objectiveId}/${id}`);
	};

  return <>
    { keyResults.map((keyResult: KeyResultObj, i: number) => <KeyResultCard key={i} title={keyResult.title} onClick={()=>redirectToKeyResult(keyResult._id)}/>) }
  </>
} 
const EmptyList: FunctionComponent = () => <CenteredContainer> No Key Results </CenteredContainer>;

const Page: NextPage = () => {
  const router = useRouter();
  const { data: keyResultsData, isLoading: keyResultsDataLoading } = useKeyResults(router.query.objectiveId);
  return <CommonLayout>
    <div className='max-w-2xl w-full h-full max-h-full'>
      {keyResultsDataLoading && <LoadingKeyResultsList/>}
      {keyResultsDataLoading && <LoadingKeyResultsList/>}
      <div className='h-full max-h-full overflow-y-scroll px-1'>
        {keyResultsData && keyResultsData.length ? <KeyResultsList keyResults={keyResultsData} /> : null}
        {keyResultsData && <NewKeyResultInput/>}
      </div>
    </div>
  </CommonLayout>;
};

export default Page;
