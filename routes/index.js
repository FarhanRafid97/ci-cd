const router = require("express").Router();
const authController = require("../controllers/authController");
const articlesController = require("../controllers/articlesController");
const restrict = require("../middlewares/restrict");

// Auth
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.get("/auth/whoami", restrict, authController.whoami);

// Article
router.get("/articles", articlesController.index);
router.get("/articles/:id", restrict, articlesController.show);
router.post("/articles", restrict, articlesController.store);
router.put("/articles/:id", restrict, articlesController.update);
router.delete("/articles/:id", restrict, articlesController.destroy);

module.exports = router;
