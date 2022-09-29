// Tutor helped with this page. 
const router = require('express').Router();
const { Post, Comment, User } = require('../models/');


router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [User],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('homepage', { posts });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Get A Post by ID
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                   model: Comment,
                   include: [
                     User,
                   ], 
                },
            ],
        });
        if(postData){ //If postData exist then serialize and render 'single-post.handlebars' file from views folder.
            const post = postData.get({ plain: true });
            res.render('single-post', { post });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Go to login page. Once user logged in it will redirect to homepage.
router.get('/login', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Go to signup page. Once user completed the signup form it will redirect to homepage.
router.get('/signup', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;