import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8085 });

wss.on("connection",function(socket) {
    console.log("user connected");
    // setInterval(() => {
    //     // socket.send("current price of solana is " + Math.random());
    //     socket.send("pong")
    // }, 500);

    socket.on("message",(e) => {
        console.log(e.toString());
        if(e.toString() === "ping"){
            socket.send("pong");
        }
    })
})