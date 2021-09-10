const transactionModel = require("../model/transaction");
const make_address = require("../functions/key_management/make_address");
const qr = require("qr-image");

module.exports = {
  getAllTransactions: (req, res) => {
    try {
      transactionModel.getAll((result) => {
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

  isTransactionPending: (req, res) => {
    try {
      transactionModel.isTransactionPending(req.params.address, (result) => {
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

  getTransactionById: (req, res) => {
    try {
      transactionModel.getById(req.params.id, (result) => {
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

  getNewIncomingAddress : (req, res) => {
    try {
      const addr = make_address();
      res.status(200);
      res.send({
        success: true,
        newaddr: addr,
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

  getQRCode : (req, res) => {
    try{
      const qr_image = qr.imageSync("hihi", {type: 'svg'});
      res.status(200);
      res.send({
        success: true,
        newaddr: qr_image,
      });
    } catch(error) {
      console.log(`Error : ${error}`);
      res.status(400);
      res.send({
        success: false,
        message: `Error :  ${error}`,
      });
    }
  }

};
