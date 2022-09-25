const sequelize = require('../config/connection');

// Import seed databases
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

// Data Serialization
const seedAll = async () => {
    await sequelize.sync({ force: true });
    
    await seedUsers();

    await seedPosts();

    await seedComments();

    process.exit(0);
};

seedAll();