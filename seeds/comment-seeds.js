const { Comment } = require('../models');

const commentData = [
    {
        comment_text:"What works for me is to step away and come back later",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "Amazing!",
        user_id: 2,
        post_id: 2,
    },
    {
        comment_text: "That is a good question.",
        user_id: 3,
        post_id: 3,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;