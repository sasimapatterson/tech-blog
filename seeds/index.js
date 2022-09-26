const sequelize = require('../config/connection');

// Import seed databases
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

// Data Serialization
const seedAll = async () => {
    await sequelize.sync({ force: true });
    
    await seedUsers();

    console.log('\n----- USERS SEEDED -----\n');

    await seedPosts();

    console.log('\n----- POSTS SEEDED -----\n');

    await seedComments();

    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

seedAll();