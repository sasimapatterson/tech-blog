// const router = require('express').Router();
// const { Post } = require('../../models/Post'); 

// // get all posts
// router.get('/', async (req, res) => {
//     try{
//         const postData = await Post.findAll();
//         res.status(200).json(postData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


// // get post by id
// router.get('/post/:id', async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id)
//         if (!postData) {
//             res.status(404).json({ message: 'No post found with this ID!'});
//             return;
//         }
//         const post = postData.get({ plain: true });
//         res.render('');
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // creat post
// router.put('/:id', async (req, res) => {
//     try {

//     }
// })
