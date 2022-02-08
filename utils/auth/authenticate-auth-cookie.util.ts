import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import axios, { AxiosRequestConfig } from 'axios';

export async function authenticateAuthCookie(cookies: NextApiRequestCookies): Promise<boolean> {
    if(!cookies.Authorization) return false;

    const config: Partial<AxiosRequestConfig> = {
        method: 'get',
        url: `${process.env.API_HOST}/auth/check`,
        headers: { Authorization: cookies.Authorization }
    };
    const apiAuthResponse = await axios.request(config);

    return apiAuthResponse.data;
}