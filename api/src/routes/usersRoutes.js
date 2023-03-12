const { Router } = require("express");
const {User} = require('../db')
const router = Router();


router.get("/", async ( req,res)=>{
    try {
        let users = await getUsers()
        if(!users){
            res.status(404).send({msg: "Not found"})
        }
           res.status(200).send(users)
        
    } catch (error) {
        res.status(400).send("Users not found")
    }
})
router.post("/validate", async (req,res) =>{
    try {
        
        const { username, password } = req.body  
        const user = await User.findOne({
            where:{
                username,
            }
        }) 
        if(!user){
           return res.status(400).send("User not found")
        }
        if(user.password!==password){
           return res.status(400).send("Password incorrect")
        }else{
           return res.status(200).json({res:"User validated", user})
        }

    } catch (error) {
        res.status(400).send(error)
    }
})
router.post("/create", async (req,res) => {
    try {
        const { username, email, password } = req.body
        if(!username || !email || !password){
            return res.status(400).send({error: "All fields are required"})
        }
        const newUser = await User.create({
            username, email, password
        })
        res.send(newUser)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})
router.put("/add/:id",async (req, res) => {
    try {
      const favorites = req.body.favorites
      const user = req.params
    
      User.update({favorites:favorites},{where:user})
      res.status(200).send("Update success")
    
    } catch (error) {
      res.status(400).send(error)
    }
    })
router.delete("/:id/pokemons/:idGame", async (req,res)=>{
    try {
        const id = req.params.id
        const idGame = req.params.idGame

        const user = await User.findByPk(id);
        let favorite = user.favorite; 
    const index = favorite.indexOf(idGame);

    if (index > -1) {
        pokedex.splice(index, 1);
        await User.update({ favorite }, { where: { id: id } });
        res.status(200).send("Game removed");
    }else {
        res.status(404).send("Game not found");
      }
    } catch (error) {
        res.status(400).send(error);
    }
} )
router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      let user = await User.findByPk(id);
      if (!user) {
        res.status(404).send({ msg: "ID NOT FOUND" });
      } else {
        const fav = user.favorites
        let favorites = []
        for (const gameId of fav){
          const parsedId = parseInt(gameId);
          if (!isNaN(parsedId)) {
            let game = await addGame(parsedId);
            favorites.push(game)
          }
        }
        res.send({ ...user.dataValues, favorites });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  })

module.exports = router;