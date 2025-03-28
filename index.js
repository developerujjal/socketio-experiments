const express = require("express");
const app = express();
const { createServer } = require("http");
const { join } = require("path");
const expressServer = createServer(app);
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'))
})



expressServer.listen(port, () => {
    console.log(`Server Open in Port; ${port}`)
});