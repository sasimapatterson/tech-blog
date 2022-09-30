const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

// Get posts
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ["title", "content" ],
      where: {
        user_id: req.session.user_id
      }
  })
  const posts = postData.map(post => post.get({ plain: true }));

  res.render('dashboard', { posts, loggedIn: true });
  } catch (err) {
    console.log(err)
    res.status(500).end();
  }
});




module.exports = router;