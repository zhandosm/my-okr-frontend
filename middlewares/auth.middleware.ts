/* eslint-disable @next/next/no-server-import-in-page */
import { NextRequest, NextResponse } from 'next/server';

export async function auth(req: NextRequest, res: NextResponse) {
    try{
        const checkUrl = `${process.env.API_HOST}/auth/check`
        const headers = new Headers();
        headers.append("Authorization", req.cookies.Authorization)
        const authenticated = await fetch(checkUrl, { headers: headers });
        if(authenticated.status===200) return NextResponse.next();
        if(authenticated.status===401) return NextResponse.redirect('/welcome');
    }catch(err){
        console.log(err);
        throw new Error("Couldn't check authentication");
    }
}