const router = require("express").Router();
const articlesController = require("../controllers/articlesController");

router.get("/articles", articlesController.index);
router.get("/articles/:id", articlesController.show);
router.post("/articles", articlesController.store);
router.put("/articles/:id", articlesController.update);
router.delete("/articles/:id", articlesController.destroy);

module.exports = router;
