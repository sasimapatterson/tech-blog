const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      // from Post.js in Model
      attributes: ["title", "content", "createdAt"],

      include: [
        {
          model: Comment,
          attributes: ["comment_text", "user_id", "post_id"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get post by id
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    if (!postData) { 
      res.status(404).jason({ message: "No post with this id" });
      return;
     }
     res.json(postData);    
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new post
router.post("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
