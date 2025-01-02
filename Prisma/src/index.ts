import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 interface updateParams {
  firstName:string,
  lastName:string
 }

 async function getUserAndTodo(userId:number){
  const res = await prisma.todo.findMany({
    where:{userId:userId},
    select:{
      id:true,
      title:true,
      description:true,
      user:true
    }
  })
  console.log(res)
 }

 getUserAndTodo(1)