const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 5000;

app.post("/register", (req, res) => {
  try {
    console.log(
      "I am post request, from the front end:::",
      req.body.registrationDetails
    );
  } catch (error) {
    console.log("error:", error);
  }
  console.log(
    "I am post request, from the front end:::",
    req.body.registrationDetails
  );
});

app.listen(PORT, () => {
  console.log("running on PORT:", PORT, "...");
});
