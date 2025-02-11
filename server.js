const express = require("express");

const app = express();

app.use(express.json());

app.get("users/", (req, res) => {
  const { Username, Email, Password, DOB } = req.body;
  try {
    if (!Username) {
      return res.send({
        message: "Username can't be emtpy",
      });
    }
    if (!Email) {
      return res.send({
        message: "Email can't be empty",
      });
    }
    if (Password.length < 8 && Password.length > 16) {
      return res.send({
        message:
          "Password length should be greater than 8 or than or equal to 16",
      });
    } else {
      return res.send({
        message: "Account created Successfully",
        Username: Username,
        Email: Email,
        Password: Password,
        DOB: DOB,
      });
    }
  } catch (err) {
    return res.send({
      message: "Internal server error",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Status code API is running on http://localhost:${PORT}`);
});
