const express = require('express'); //import express
const app = express(); //express function
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
var indexRouter = require('./route/index');
app.use('/', indexRouter);


//DATABASE
const db = require('./models');
const sequelize = db.sequelize;

(async () => {
try {
  await sequelize.authenticate();
  console.log("MySQL connection established successfully.");

  await sequelize.sync({ alter: true });

   app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });

} catch (error) {
  console.error("Unable to connect to database:", error);
}
}) ();


  /* app.get('/',(req,res)=> {
    res.send('Hello');
});

app.get('/test',(req,res)=> {
    res.send('Hello Miss');
});  */

// app.listen(port,()=>{   //listen- express function - start krna
//     console.log(`Server listening on port ${port}`);
// })
// 192.168.1.6
