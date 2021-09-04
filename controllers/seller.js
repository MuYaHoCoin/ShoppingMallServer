const sellerModel = require("../model/seller");

module.exports = {
  getAllSellers: (req, res) => {
    try {
      sellerModel.getAll((result) => {
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
  getSellersByName: (req, res) => {
    try {
      sellerModel.getByName(req.params.name, (result) => {
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
  getSellersById: (req, res) => {
    try {
      sellerModel.getById(req.params.id, (result) => {
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
  getSellersByAddress: (req, res) => {
    try {
      sellerModel.getByAddress(req.params.address, (result) => {
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
  createSeller: (req, res) => {
    try {
      sellerModel.create(req.body.name, req.body.address, (result) => {
        console.log(result);
        res.status(201);
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
  updateSellers: (req, res) => {
    try {
      sellerModel.update(
        req.body.nameOrigin,
        req.body.nameChange,
        req.body.addressChange,
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
  deleteSellersByName: (req, res) => {
    try {
      sellerModel.deleteByName(req.body.name, (result) => {
        console.log(result);
        res.status(201);
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
  deleteSellersByAddress: (req, res) => {
    try {
      sellerModel.deleteByAddress(req.body.address, (result) => {
        console.log(result);
        res.status(201);
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
};
