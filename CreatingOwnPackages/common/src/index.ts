import { z } from "zod";

export const signupInput = z.object({
    username:z.string().email(), 
    password:z.string()
})

export type signupParams = z.infer<typeof signupInput>;