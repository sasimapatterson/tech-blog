const router = require('express').Router();
const User = require('../models/User');

//  route to get all users
router.get('/', async (req, res) => {

        const userData = await User.findAll().catch((err) => {
            res.json(err);
            console.log(userData)
        });
        // Serialization
        const users = userData.map((user) => user.get({ plain: true }));
        res.json({ users }); // this is just to see if I can get data of user to display on the browser

        // res.render('all', { users }); // res.render to display the template in handlebars which is in 'views' folder.
        // } catch (err) {
        //     res.status(500).json(err);
        // }
    });

    router.get('/user/:id', async (req, res) => {
        try {
            const userData = await User.findByPk(req.params.id);
            if(!userData) {
                res.status(404).json({ message: 'No user with this id '});
                return;
            }
            const user = userData.get({ plain: true });
            // res.json( user );
            res.render('user', user);
        } catch (err) {
            res.status(500).json(err);
        };
    });

module.exports = router;