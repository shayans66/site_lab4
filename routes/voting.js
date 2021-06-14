const express = require("express");
const Voting = require("../models/voting");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const votes = await Voting.tallyVotes();

  res.status(200).json(votes);
});

router.post("/:pizzaName", async (req, res, next) => {
  console.log(req.params)

  const pizzaName = req.params.pizzaName;

  const votes = await Voting.recordVotes(pizzaName);

  res.status(200).json(votes);
});

module.exports = router;
