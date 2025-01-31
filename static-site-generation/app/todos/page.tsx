import revalidate from "../lib/actions/action1";

export default async function Home(){
    const response = await fetch("https://sum-server.100xdevs.com/todos",{
        next:{
            tags:['todos']
        }
    })
    const data = await response.json();
    revalidate()

    return (
        <div>
            {data.todos.map((todo:any) => <div key={todo.id}>
                {todo.title}
                {todo.description}
            </div>)}
        </div>
    )
}