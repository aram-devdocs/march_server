const router = require("express").Router();

router.post("/login", (req, res) => {
  console.log(req);

  // TODO - connect to db

  if (true)
    res.send({
      status: true,
      message: `Username: ${req.body.username}, Password: ${req.body.password}`,
    });
});

module.exports = router;
