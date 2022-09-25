const { User } = require('../models');

const userData = [
    {
        username: 'crazypumpkin',
        password: '2crazy',
    },
    {
        username: 'gitgoing',
        password: 'i@mgittingit',
    },
    {
        username: 'rubberducky',
        password: 'quack123',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;