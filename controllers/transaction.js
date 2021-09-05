const transactionModel = require("../model/transaction");

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
};
