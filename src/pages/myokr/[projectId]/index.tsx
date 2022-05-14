import type { NextPage } from 'next';
import { CommonLayout } from '@components';
import { useRouter } from 'next/router';

const Page: NextPage = () => {
    return <CommonLayout>
      Current Project ID
      Key results List
    </CommonLayout>
  )
}

export default Page
