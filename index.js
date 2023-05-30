const express = require("express");
const users = require("./db/data.json");
const app = express();
const port = 5001;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send(users);
});

// This function to calculate common hobbies
function getCommonHobbies(hobbies1, hobbies2) {
  return hobbies1.filter((hobby) => hobbies2.includes(hobby));
}

// API endpoint for getting potential matches based on hobbies
app.get("/match/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);

  // Find the user by ID
  const currentUser = users.find((user) => user.id === userId);

  // Return potential matches based on hobbies
  if (currentUser) {
    const potentialMatches = users.filter(
      (user) =>
        user.id !== currentUser.id &&
        getCommonHobbies(user.hobbies, currentUser.hobbies).length > 0
    );

    // Sort potential matches based on count of matched hobbies
    potentialMatches.sort((a, b) => {
      const hobbiesMatchedA = getCommonHobbies(
        a.hobbies,
        currentUser.hobbies
      ).length;
      const hobbiesMatchedB = getCommonHobbies(
        b.hobbies,
        currentUser.hobbies
      ).length;
      return hobbiesMatchedB - hobbiesMatchedA; // Sorting based on hobbies count matched
    });

    res.json(potentialMatches);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// Starting the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
