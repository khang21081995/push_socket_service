const express = require("express");
const router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/api/push_socket", function (req, res) {
  const keyEvent = (req.body.key_event + "").trim();
  const pushData = req.body.push_data;
  if (keyEvent === "DEBUG") console.log({ keyEvent, pushData });
  if (keyEvent && pushData) {
    const io = require("../server/www").io;
    io.emit(keyEvent, pushData);
    res.status(200).json({
      status: true,
      message: "push data success to devices listening at event " + keyEvent,
    });
  } else {
    res.status(400).json({
      status: false,
      message: "Invalid input",
    });
  }
});

module.exports = router;
