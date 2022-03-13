import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { GetServerSidePropsContext, NextPage } from 'next';
import DashboardWrapper from '../../components/dashboard/DashboardWrapper';

type PageInitialProps = {
  projects: any,
  initialProject: any, 
}

const Page: NextPage<PageInitialProps> = (props) => {
  const { projects, initialProject } = props;
  return (
    <DashboardWrapper initialProject={initialProject} projects={projects}></DashboardWrapper>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  try{
    
    const config: Partial<AxiosRequestConfig> = {
      method: 'get',
      url: `${process.env.API_HOST}/dashboard`,
      headers: { Authorization: ctx.req.cookies.Authorization }
    };
    const response: AxiosResponse = await axios.request(config);
    return {
      props: response.data
    }
  }catch(err){
    console.log(err);
    return {
      props: {}
    }
  }
}

export default Page
