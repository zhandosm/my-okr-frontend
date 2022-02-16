import { NextApiRequest, NextApiResponse } from "next"
import { resMessage } from "../../../utils";
import { serialize } from "cookie";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch(req.method){
        case 'POST':
            try{
                const { username, password } = req.body;
                if(!(username || password)) return res.status(400).json(resMessage(400, 'Please provide valid username or password'));
                const authResponse = await axios.post(`${process.env.API_HOST}/auth/login`, { username: username, password: password });
                const { access_token: accessToken} = authResponse.data;
                res.setHeader('Set-Cookie', serialize('Authorization', `Bearer ${accessToken}`, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',   
                    sameSite: 'lax',
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/'
                }));
                return res.status(201).json(resMessage(201));
            }catch(err: any ){
                if(err.response.status===401) return res.status(401).json(resMessage(401));
                if(err.response.status===404) return res.status(404).json(resMessage(404));
                throw new Error("Unexpected error")
            }
            break;
        default:
            res.status(500).json(resMessage(500));
            break;
    }
}