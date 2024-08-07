// Import the express module
const express=require('express');
// Create an instance of the express application
const app=express();
// Specify a port number for the server
const port=5000;
// Start the server and listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const products = ["product1", "product2", "product3"]

app.get('/products', (req, res) => {
  // Send the posts array as a JSON response
  res.status(200).json(products);
});

