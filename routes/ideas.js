const express = require("express");
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: "Take out the trash",
    tag: "home",
    username: "admin",
    date: "2020-01-01",
  },
  {
    id: 2,
    text: "Take out the trash",
    tag: "home",
    username: "admin",
    date: "2020-01-01",
  },
  {
    id: 3,
    text: "Take out the trash",
    tag: "home",
    username: "admin",
    date: "2020-01-01",
  },
];

// Get all ideas
router.get("/", (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get single idea
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }

  res.json({ success: true, data: idea });
});

// Create idea
router.post("/", (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  res.json({ success: true, data: idea });
});

module.exports = router;
