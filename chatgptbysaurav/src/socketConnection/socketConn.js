import io, { Socket } from "socket.io-client";
let socket;
export const connectWithSocketServer = () =>{
    socket = io("http://localhost:5100");

    socket.on("connect", ()=>{
        console.log(`connected with socket.io server ${socket.id}`);
    })
}