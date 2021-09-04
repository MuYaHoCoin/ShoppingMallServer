const goodsModel = require("../model/goods");

module.exports = {
  getAllGoods: (req, res) => {
    try {
      goodsModel.getAll((result) => {
        console.log(result);
        res.status(200);
        res.send({
          success: true,
          result,
        });
      });
    } catch (error) {
      console.log(`Error : ${error}`);
      res.status(400);
      res.send({
        success: false,
        message: `Error :  ${error}`,
      });
    }
  },
  getGoodsByName: (req, res) => {
    try {
      goodsModel.getByName(req.params.name, (result) => {
        console.log(result);
        res.status(200);
        res.send({
          success: true,
          result,
        });
      });
    } catch (error) {
      console.log(`Error : ${error}`);
      res.status(400);
      res.send({
        success: false,
        message: `Error :  ${error}`,
      });
    }
  },
  getGoodsBySellerName: (req, res) => {
    try {
      goodsModel.getBySellerName(req.params.name, (result) => {
        console.log(result);
        res.status(200);
        res.send({
          success: true,
          result,
        });
      });
    } catch (error) {
      console.log(`Error : ${error}`);
      res.status(400);
      res.send({
        success: false,
        message: `Error :  ${error}`,
      });
    }
  },
  getGoodsBySellerId: (req, res) => {
    try {
      goodsModel.getBySellerId(req.params.id, (result) => {
        console.log(result);
        res.status(200);
        res.send({
          success: true,
          result,
        });
      });
    } catch (error) {
      console.log(`Error : ${error}`);
      res.status(400);
      res.send({
        success: false,
        message: `Error :  ${error}`,
      });
    }
  },
  getGoodsByPrice: (req, res) => {
    try {
      goodsModel.getByPrice(req.params.price, (result) => {
        console.log(result);
        res.status(200);
        res.send({
          success: true,
          result,
        });
      });
    } catch (error) {
      console.log(`Error : ${error}`);
      res.status(400);
      res.send({
        success: false,
        message: `Error :  ${error}`,
      });
    }
  },
  getGoodsByPriceUpper: (req, res) => {
    try {
      goodsModel.getByPriceUpper(req.params.price, (result) => {
        console.log(result);
        res.status(200);
        res.send({
          success: true,
          result,
        });
      });
    } catch (error) {
      console.log(`Error : ${error}`);
      res.status(400);
      res.send({
        success: false,
        message: `Error :  ${error}`,
      });
    }
  },
  getGoodsByPriceLower: (req, res) => {
    try {
      goodsModel.getByPriceLower(req.params.price, (result) => {
        console.log(result);
        res.status(200);
        res.send({
          success: true,
          result,
        });
      });
    } catch (error) {
      console.log(`Error : ${error}`);
      res.status(400);
      res.send({
        success: false,
        message: `Error :  ${error}`,
      });
    }
  },
  createGoods: (req, res) => {
    console.log("routes success");
    try {
      goodsModel.create(
        req.body.name,
        req.body.price,
        req.body.sellerId,
        (result) => {
          console.log(result);
          res.status(201);
          res.send({
            success: true,
            result,
          });
        }
      );
    } catch (error) {
      console.log(`Error : ${error}`);
      res.status(400);
      res.send({
        success: false,
        message: `Error :  ${error}`,
      });
    }
  },
  updateGoods: (req, res) => {},
  deleteGoods: (req, res) => {},
};
