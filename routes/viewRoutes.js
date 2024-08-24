const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");
const aunthController = require("../controllers/authController");

router.use(aunthController.isLoggedin);

router.get("/", viewController.getOverview);
router.get("/tour/:slug", viewController.getTour);
router.get("/login", viewController.getLoginForm);

module.exports = router;
