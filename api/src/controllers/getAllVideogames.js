const getApiVideogames = require('./getApiVideogame');
const getDBVideogames = require('./getDBVideogames');




const getVideogames = async () => {

  const customGames = await getDBVideogames()
  const apiGames = await getApiVideogames()

  return apiGames.concat(customGames)
};
module.exports = getVideogames;
