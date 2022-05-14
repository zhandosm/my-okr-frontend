/* eslint-disable @next/next/no-server-import-in-page */
import { NextRequest, NextResponse } from 'next/server';

export async function auth(req: NextRequest, res: NextResponse) {
    try{
        
        const checkUrl = `${process.env.API_HOST}/auth/check`
        const headers = new Headers();
        headers.append("Authorization", req.cookies.Authorization)
        const authenticated = await fetch(checkUrl, { headers: headers });
        if(authenticated.status===200) return NextResponse.next();
        const url = req.nextUrl.clone()
        url.pathname = "/welcome";
        if(authenticated.status===401) return NextResponse.redirect(url);
    }catch(err){
        console.log(err);
        throw new Error("Couldn't check authentication");
    }
}

export async function noAuth(req: NextRequest, res: NextResponse) {
    try{
        const checkUrl = `${process.env.API_HOST}/auth/check`;
        const headers = new Headers();
        headers.append("Authorization", req.cookies.Authorization)
        const authenticated = await fetch(checkUrl, { headers: headers });
        const url = req.nextUrl.clone()
        url.pathname = "/myokr/dashboard";
        if(authenticated.status===200) return NextResponse.redirect(url);
        if(authenticated.status===401) return NextResponse.next();
    }catch(err){
        console.log(err);
        throw new Error("Couldn't check authentication");
    }
}