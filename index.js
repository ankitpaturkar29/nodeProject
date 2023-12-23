const express = require("express");
const Users = require('./models/userActions');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('get all users!');
});

//API CALL TO CREATE USER
app.post('/api/users/', (req, res) => {
      const userData = req.body;
      Users.createUser(userData)
      .then(user =>{
        res.status(200).json({message:'User created successfully!'})
      })
      .catch(error =>{      
        res.status(500).json({message:' Unable to create user !'},error)
      })
});

//API CALL TO GET ALL USERS
app.get('/api/users/', (req, res) => {
  Users.getAllUsers()
  .then(user =>{
    res.status(200).json(user)
  })
  .catch(error =>{      
    console.log(error);
    res.status(500).json({message:' Unable to fetch users !'})
  })
});


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});