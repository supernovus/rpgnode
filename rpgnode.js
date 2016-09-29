// Load the main library.
global.RPG = require('RPG');

// Reference our main directory
global.rpgPath = __dirname;

// Load the main config file.
RPG.load(rpgPath+'/config.json');

// Now, let's do it!
RPG.run();
