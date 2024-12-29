import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 interface updateParams {
  firstName:string,
  lastName:string
 }

 async function getUser(username:string){
  const res = await prisma.user.findMany({
    where:{email:username},
  })
  console.log(res)
 }

 getUser("pradeep@gmail.com")