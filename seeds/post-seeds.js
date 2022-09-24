const { Post } = require('../models');

const postData = [
    {
        title: "How to survive coding bootcamp as a full-time mom",
        content: "Breath, taking it one day at a time. Remind yourself that if you can have a baby then you can do this too!",
        user_id: 1,
    },
    {
        title: "The important of self-care in tech business ",
        content: "You will feel more energize and become much more productive. Look after your health and your health will look after you.",
        user_id: 2,
    },
    {
        title: "Backend vs Frontend, which one is harder to learn",
        content: "This comes down to personal preferences. Learn foundation of both and then you can decide.",
        user_id: 3,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;