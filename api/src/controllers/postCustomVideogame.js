const { Videogame } = require('../db');
const getAllGenres = require('./getAllGenres');
const fs = require('fs');
const getAllPlatforms = require('./getAllPlatforms');

const postCustomVideogame = async (formData) => {
  const {
    name, summary, released, rating, genres, platforms, image
  } = formData

  if(!name || !summary || !platforms){
    throw  'Missing required information.'}

if(image){
  const imageExtension = image.substring("data:image/".length, image.indexOf(";base64"));
  const imageName = `${Date.now()}.${imageExtension}`;
  const imagePath = `./src/routes/public/images/${imageName}`;
  fs.writeFileSync(imagePath, image.substring(image.indexOf("base64,") + 7), 'base64'); 
}
 

  const gameAlreadyExist = await Videogame.findOne({
    where:{ name }
  })
  if(gameAlreadyExist){
    throw 'The game already exist! Choose another name.'

  }
  const newGame = await (image?  Videogame.create({
    name, summary, released, rating, image: `https://videogames-pi-eg.onrender.com/${imageName}`
  }) : Videogame.create({
    name, summary, released, rating, image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Android_TV_game_controller.jpg"
  }))
  const allGenres = await getAllGenres();
  const filteredGenres = genres.map(genre => (
    allGenres.find(g => g.name === genre)
  ))
  const allPlatforms = await getAllPlatforms();
  const filteredPlatforms = platforms.map(plat =>(
    allPlatforms.find(p => p.name === plat)
  ))
  newGame.addGenres(filteredGenres)
  newGame.addPlatforms(filteredPlatforms)
  return {
    message: "New game added successfully!",
    game: newGame
  }
};

module.exports = postCustomVideogame;
