import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c:any,next:any){
  if(c.req.header("Authorization")){
    //do validation
    await next()
  }
  else{
    return c.text("you don't have access")
  }
}

app.post('/',authMiddleware, async(c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.text('Hello Hono!')
})

export default app
