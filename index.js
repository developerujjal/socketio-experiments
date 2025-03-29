const express = require("express");
const app = express();
const { createServer } = require("http");
const { join } = require("path");
const expressServer = createServer(app);
const { Server } = require("socket.io");
const port = process.env.PORT || 5000;

const io = new Server(expressServer);



app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'))
})


// io.on('connection', (socket) => {
//     console.log("A user connected; ", socket.id)

//     // setTimeout(()=> {
//     //     socket.send("This is Barry Allen")
//     // }, 5000)


//     // setInterval(() => {
//     //     const time = new Date().getTime();
//     //     socket.send(time)
//     // }, 100)

//     // setTimeout(() => {
//     //     socket.emit("SendData", "We are the Best")
//     // }, 2000)


//     // socket.on("message", (value) => {
//     //     console.log(value)
//     // })


//     // socket.on("textValue", (value) => {
//     //     console.log(value)
//     // })

//     //===============> Broadcasting Event <=============

//     //Older syntax but still work
//     // io.sockets.emit('brodcas', "Helle Everyone")


//     //Morder syntax
//     // io.emit("newBrodcast", "Hello from server side")

//     socket.on('disconnect', () => {
//         console.log("User disconnected")
//     })
// })



//Custom Namespaces
const guestNamespace = io.of('/guest');
const adminNamespace = io.of('/admin');

guestNamespace.on('connection', (socket) => {
    guestNamespace.emit("mybrodcast", "Hello from Guest")
})


adminNamespace.on('connection', (socket) => {
    adminNamespace.emit('adminbrodcast', 'Hello from Admin')
})



expressServer.listen(port, () => {
    console.log(`Server Open in Port; ${port}`)
});