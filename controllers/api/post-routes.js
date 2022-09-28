const router = require('express').Router();
const { Post, Comment, User } = require('../../models'); 
const withAuth = require('../../utils/auth');

// get all posts
router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll();
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// get post by id
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
        if (postData) {
         const post = postData.get({ plain: true });
         res.render('single-post', { post });   
        } else {
          res.status(404).end();
        }    
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create new post
router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;