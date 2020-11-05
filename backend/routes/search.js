const router = require("express").Router();
const searchController = require('../controllers/search');

router.post('/', searchController.postSearch);
router.post('/nextpage', searchController.postNextPage);
router.post('/clickdetail', searchController.postClickDetails);
router.post('/homeworld', searchController.postHomeWorld);

module.exports = router;