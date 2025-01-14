import { client } from "@/db";
async function fetchData(){
    const user = await client.user.findFirst()
        return {
          username: user?.username,
          password: user?.password,
        }
      
}

export default async function User(){
    const data = await fetchData();
    return (
        <div>
        {data.username}
        {data.password}
        </div>
    )
}