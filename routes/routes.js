const router = require("express").Router();
const sellerController = require("../controllers/seller");
const goodsController = require("../controllers/goods");

//** API DEFINITION PART */
router.get("/", (req, res) => res.send("hey"));

//seller CRUD
router.get("/seller", sellerController.getAllSellers);
router.get("/seller/name/:name", sellerController.getSellersByName);
router.get("/seller/id/:id", sellerController.getSellersById);
router.get("/seller/address/:address", sellerController.getSellersByAddress);
router.post("/seller/create", sellerController.createSeller);
router.post("/seller/update", sellerController.updateSellers);
router.post("/seller/delete/name", sellerController.deleteSellersByName);
router.post("/seller/delete/address", sellerController.deleteSellersByAddress);

//buyer CRUD

//goods CRUD
router.get("/goods", goodsController.getAllGoods);
router.get("/goods/name/:name", goodsController.getGoodsByName);
router.get("/goods/seller_name/:name", goodsController.getGoodsBySellerName);
router.get("/goods/seller_id/:id", goodsController.getGoodsBySellerId);
router.get("/goods/price/:price", goodsController.getGoodsByPrice);
router.get("/goods/price/upper", goodsController.getGoodsByPriceUpper);
router.get("/goods/price/lower", goodsController.getGoodsByPriceLower);
router.post("/goods/create", goodsController.createGoods);
router.post("/goods/update", goodsController.updateGoods);
router.post("/goods/delete", goodsController.deleteGoods);

//transaction CRUD

module.exports = router;
