const router = require("express").Router();
const party = require("../models/party");
router.get("/demo", (req, res) => {
  if (true)
    res.send({
      status: true,
      party: party.demo,
    });
});

module.exports = router;
