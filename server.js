const express = require("express");
const { route } = require("./routes/userRoutes");

require("dotenv").config(); 
const app = express()
app.use(express.json());
const port = process.env.PORT || 5000;
app.use('/api/users', require ('./routes/userRoutes'));

app.listen(port ,()=>{
  console.log(`App listening on port ${port}`);
 })
 module.exports = app; 
