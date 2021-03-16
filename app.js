const express = require('express'); // like a PHP require 

const port = process.env.PORT || 3000; // localhost:3000


server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});