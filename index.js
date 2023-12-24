const express = require("express");
const Users = require('./models/userActions');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('get all users!');
});

// API CALL TO CREATE USER
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

// API CALL TO GET ALL USERS
app.get('/api/users/', (req, res) => {
  Users.getAllUsers()
  .then(users =>{
    res.status(200).json(users)
  })
  .catch(error =>{      
    console.log(error);
    res.status(500).json({message:' Unable to fetch users !'})
  })
});

// API CALL TO GET USER BY ID
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  Users.getSingleUser(userId)
  .then(user =>{
    user ? res.status(200).json(user) : res.status(404).json({message:'user is not available!'})
  })
  .catch(error =>{      
    console.log(error);
    res.status(500).json({message:' Unable to fetch user !'})
  })
});

// API CALL TO DELETE USER BY ID
app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  Users.deleteSingleUser(userId)
  .then(item =>{
    if(item>0){
      res.status(200).json({message:'user deleted successfully!'})
     }else{
      res.status(404).json({message:'user is not available!'})
     }
  })
  .catch(error =>{      
    console.log(error);
    res.status(500).json({message:' Unable to delete user !'})
  })
});

// API CALL TO UPDATE USER 
app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  Users.singleUpdateUser(userId,userData)
  .then(user =>{
    if(user){
      res.status(200).json(user)
     }else{
      res.status(404).json({message:'user is not updated!'})
     }
  })
  .catch(error =>{      
    console.log(error);
    res.status(500).json({message:' Unable to update user !'})
  })
});
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});