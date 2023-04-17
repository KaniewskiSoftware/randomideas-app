const express = require("express");
const port = 5000;

const app = express();
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

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the RandomIdeas API" });
});

// Get all ideas
app.get("/api/ideas", (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get single idea
app.get("/api/ideas/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }

  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
