import type { NextPage } from 'next';
import { CommonLayout, KeyResultCard, Loader } from '@components';

const Page: NextPage = () => {

  return <CommonLayout>
    <div className='max-w-2xl w-full h-full max-h-full'>
      {/* <div className="flex justify-center items-center h-full">
        <Loader style={{maxWidth: "100px"}}/>
      </div> */}
      <div className='h-full max-h-full overflow-y-scroll px-1'>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
        <KeyResultCard title={"TEST"} onClick={()=>console.log('click')}/>
      </div>
    </div>
  </CommonLayout>;
};

export default Page;
