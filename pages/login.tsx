import type { GetServerSidePropsContext, NextPage } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { authenticateAuthCookie } from '../utils';
import { ApiError, NextApiRequestCookies } from 'next/dist/server/api-utils';
import { IncomingMessage } from 'http';

const Page: NextPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function login(): Promise<void> {
    try{
      const url = `api/auth/login`;
      const data = {
          'username': username,
          'password': password 
      };
      const response = await axios.post(url, data);
      if(response.status!==201) throw new Error('Unexpected Error');
      router.reload()
    }catch(err:any){
      if(err.response.status===401) return alert(err.message);
      console.log(err);
      alert(err.message);
    }
  }

  return (
    <div>
      <input type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type='text' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={()=>login()}>login</button>
    </div>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext){
    try{
      const authenticated = await authenticateAuthCookie(ctx.req.cookies);
      if(authenticated){
        return {
          redirect: {
            permanent: false,
            destination: "/p",
          },
          props:{},
        };
      }
      return { props: {} };
    }catch(err){
      console.log(err)
      throw new ApiError(500, "Couldn't check authentication")
    }
}

export default Page
