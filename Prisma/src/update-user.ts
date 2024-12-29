import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 interface updateParams {
  firstName:string,
  lastName:string
 }

 async function updateUser(username:string, {
  firstName,
  lastName
}:updateParams){
  const res = await prisma.user.update({
    where:{email:username},
    data:{
      firstName,
      lastName
    }
  })
  console.log(res)
 }

 updateUser("pradeep@gmail.com",{
  firstName:"pradeeep1111",
  lastName:"yadavv"
})