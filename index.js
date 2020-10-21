const express = require('express');
const app = express();
const port = 4000;



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://creativeDirector:creative@cluster0.ok6kl.mongodb.net/creativeAgencyClient?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("creative").collection("orderList");
  // perform actions on the collection object
  console.log("Mongo connected sucessfully");
});


//default server method
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})