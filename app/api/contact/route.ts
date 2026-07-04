import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            ...body,
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
        }),
    });

    const result = await response.json();

    return NextResponse.json(result);
}