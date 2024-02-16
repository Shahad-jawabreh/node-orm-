const User = require('../../../DB/model/user.model.js');

// Fetch all users
const getuaser = async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
      console.log(users);
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  const postuser = async (req, res) => {
    try{
       console.log(req.body)
         const { name, bio, email, password } = req.body;
        const newUser = await User.create({
            name,
            bio,
            email,
            password,
          });
          res.json(newUser);
    }catch(error){
        console.log(error.message);
    }

  }
module.exports = {getuaser,postuser} ;