const router = require("express").Router();
const maps = require("../models/maps");

router.get("/demo", (req, res) => {
  console.log(maps)
  if (true)
    res.send({
      status: true,
      map: maps.demo,
    });
});

module.exports = router;
