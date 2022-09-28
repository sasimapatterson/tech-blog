const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

// Create new  comment
router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      post_id: req.body.post_id,
      comment_text: req.body.comment_text,
      user_id: req.session.user_id, // user id from session
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedComment = await Comment.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(deletedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;