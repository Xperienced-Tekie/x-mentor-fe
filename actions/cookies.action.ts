"use server";

import { cookies } from "next/headers";

export default async function setCookie(value: string) {

    // Calculate the expiration date (14 days from now)
    const expires = new Date();
    expires.setDate(expires.getDate() + 14);

    cookies().set({
        name: "authToken",
        value: value,
        httpOnly: true,
        secure: true, 
        path: "/",
        expires: expires, // 14-day expiration as previously set
    });

    return true;
}


export async function deleteCookie() {

    cookies().delete('authToken')

    return true;
}


export async function getSession() {
    const cookieStore = cookies();
    const cookie = cookieStore.get('authToken');
    const token = cookie?.value;

    return token;
}