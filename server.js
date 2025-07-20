const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// should be comment in production
const cors = require("cors");

app.options(
  "*",
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000", // allow your frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // if you use cookies or auth headers
  })
);

// Connect Database
// connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use("/api/users", require("./server/routes/api/users"));
app.use("/api/auth", require("./server/routes/api/auth"));
app.use("/api/profile", require("./server/routes/api/profile"));
app.use("/api/posts", require("./server/routes/api/posts"));
app.use("/api/notes", require("./server/routes/api/notes"));

// try {
//   const notesRouter = require("./server/routes/api/notes");
//   app.use("/api/notes", notesRouter);
// } catch (err) {
//   console.error("Failed to load /api/notes:", err.message);
// }

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5025;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
