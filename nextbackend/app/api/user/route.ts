import { NextRequest } from "next/server";
import  { z }  from 'zod';
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export const inputType = z.object({
    username:z.string().email(),
    password:z.string().min(6)
})
export type InputType = z.infer<typeof inputType>;

export async function POST(req:NextRequest){
    const body = await req.json();
    const {success} = inputType.safeParse(body);
    if(!success){
        return Response.json({
            message:"input validation failed"
        })
    }
    const user = await client.user.create({
        data: {
            username:body.username,
            password:body.password
        }
    })
    console.log(user.id);

    return Response.json({
       message:"You are logged in"
    })
}