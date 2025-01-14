// import { NextRequest, NextResponse } from "next/server";
// import { z } from "zod";
// import { client } from '@/db'

// export const inputType = z.object({
//   username: z.string().email(),
//   password: z.string().min(6),
// });
// export type InputType = z.infer<typeof inputType>;

// export async function GET(req:NextRequest){
//     const user = await client.user.findFirst();
//     return NextResponse.json({
//         username:user?.username,
//         password:user?.password
//     })
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { success } = inputType.safeParse(body);
//     if (!success) {
//       return NextResponse.json({
//         message: "input validation failed",
//       });
//     }
//     const user = await client.user.create({
//       data: {
//         username: body.username,
//         password: body.password,
//       },
//     });
//     console.log(user.id);

//     return NextResponse.json({
//       message: "You are logged in",
//     });
//   } catch (e) {
//     // console.log(e);
//     return NextResponse.json(
//       {
//         message: "error while signing up",
//       },
//       {
//         status: 411,
//       }
//     );
//   }
// }
