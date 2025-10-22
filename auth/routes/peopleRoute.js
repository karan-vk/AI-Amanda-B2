const express = require("express");
const { transformPeople } = require("../controllers/peopleController");

const router = express.Router();

// POST /api/v1/people/transform - Transform people list
router.route("/transform").post(transformPeople);

module.exports = router;
