var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { createjob,job } = require("../controller/createjob");

router.post(
  "/createjob",createjob
);

router.get("/jobs", job)
module.exports = router;