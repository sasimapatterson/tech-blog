const router = require("express").Router();
const User = require("../../models/User");

//  route to get all users
router.get("/", async (req, res) => {
  const userData = await User.findAll().catch((err) => {
    res.json(err);
    console.log(userData);
  });
  // Serialization
  const users = userData.map((user) => user.get({ plain: true }));
  res.render("home", { users }); // this is just to see if I can get data of user to display on the browser

  // res.render('all', { users }); // res.render to display the template in handlebars which is in 'views' folder.
  // } catch (err) {
  //     res.status(500).json(err);
  // }
});
// Get user with id
router.get("/user/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with this id" });
      return;
    }
    const user = userData.get({ plain: true });
    // res.json( user );
    res.render("user", { user });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    
    if (!userData) {
      res.status(400).json({ message: "Incorrect username" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.post('/signUp', async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.create(req.body);
    
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = userData.id;
      return res.json(userData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
