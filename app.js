const express = require('express'); // like a PHP require 
const path = require('path');
const server = express();


// set our views directory
server.set("views", path.join(__dirname, 'views'));
// set the static assets director so Express knows where to look
// for css file, JS files, images et - anything static
server.use(express.static(path(__dirname, "public")));

server.get("/", (req, res) => {
    console.log('you have now hit the home route');
    res.sendFile('views/index.html');
})

server.get("/contact", (req, res) => {
    console.log('hit the contact route');
    res.sendFile('views/contact.html');
})

const port = process.env.PORT || 3000; // localhost:3000

server.listen(port, () => {
    console.log(`Server is now running at ${port}/`);
});