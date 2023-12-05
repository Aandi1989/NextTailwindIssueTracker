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