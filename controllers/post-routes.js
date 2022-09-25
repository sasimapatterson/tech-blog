const router = require('express').Router();
const Post = require('../models/Post');

router.get('post/:id', async (req, res) => {
    try {
    const postData = await Post.findAll(req.params.id);
    console.log(postData)

    const post = postData.get({ plain: true });
    res.render('post', post);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;