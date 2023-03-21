const server = require('./src/app.js');
const getAllGenres = require('./src/controllers/getAllGenres.js');
const getAllPlatforms = require('./src/controllers/getAllPlatforms.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({force:true}).then(() => {
  server.listen(3001,async () => {
    await getAllGenres()
    await getAllPlatforms()
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
