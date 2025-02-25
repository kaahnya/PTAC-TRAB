'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {
    
    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const isTokenValidated = validateToken(token);
    const urlDashboard = new URL('/pages/dashboard', request.url)
    const urlRegister = new URL('/pages/register', request.url)
    const urlAlter = new URL('/pages/alter', request.url)

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }
    }
    if (isTokenValidated) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlDashboard);
        }
    }

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/register' || request.nextUrl.pathname === '/pages/alter') {
            return NextResponse.redirect(urlLogin);
        }
    }

    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/register', '/pages/alter']
};