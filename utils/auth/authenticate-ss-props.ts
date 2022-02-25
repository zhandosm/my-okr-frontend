import type { GetServerSidePropsContext } from 'next';
import { authenticateAuthCookie } from './authenticate-auth-cookie.util';
import { ApiError } from 'next/dist/server/api-utils';

export async function authCheck(ctx: GetServerSidePropsContext) {
    try{
        const authenticated = await authenticateAuthCookie(ctx.req.cookies);
        if(authenticated){
          return {
            redirect: {
              permanent: false,
              destination: "/p/dashboard",
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