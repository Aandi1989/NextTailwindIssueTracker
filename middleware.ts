import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/new-page', request.url));
// }

export const config = {
    // *: zero or more
    // +: one or more
    // ?: zero or one
    matcher: ['/dashboard/:id*']
}



/*
пример private routing  https://www.youtube.com/watch?v=cj1trlsQ0is&list=WL&index=1&t=15s

import {sessionStatus} from "@utils/session";   // переменная в которой мы храним значение авторизован пользователь или нет
import {NextRequest, NextResponse} from "next/server";

const protectedRoutes = ["/middlewareside"];  // url доступ к которому хотим ограничить

export default function middleware(req: any) {
    if(!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)){
        const absoluteURL = new URL("/", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}
*/ 


/*
пример использования cookies https://www.youtube.com/watch?v=NUHAc1wjL3A&list=WL&index=2&t=800s

import { NextResponse } from 'next/server'

export function middleware(request) {
    parsed nextUrl object
    const { pathname, searchParams } = request.nextUrl
    console.log({ pathname, sort: searchParams.get('sort') })
    return NextResponse.next()

    redirecting 
    return NextResponse.rewrite(new URL('/team', request.url))

    reading request cookies
    const allCookies = request.cookies.getAll()

    setting response cookies
    const response = NextResponse.next()
    response. cookie.set({
        name: 'next',
        value: 'fast',
        path: '/'
    })
    return response

    responding with json
    return NextResponse.json({ message: 'Hello from middleware' })

    export const config = {
        matcher: '/api/test'
    }
}
*/