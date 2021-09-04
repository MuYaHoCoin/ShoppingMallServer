const client = require("../db/client");
const TABLE = require("../db/config");

module.exports = {
  getAll: async (results) => {
    const query = `SELECT * FROM ${TABLE.TB_GOODS}`;
    return await client.query(query, (error, result, fields) => {
      if (error) {
        console.log(err);
        throw err;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },

  getByName: async (name, results) => {
    const query = `SELECT * FROM ${TABLE.TB_GOODS} WHERE name = ?`;
    return await client.query(query, [name], (error, result, fields) => {
      if (error) {
        console.log(err);
        throw err;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },

  getBySellerName: async (sellerName, results) => {
    const query = `SELECT ${TABLE.TB_GOODS}.* FROM ${TABLE.TB_GOODS}, ${TABLE.TB_SELLER} WHERE ${TABLE.TB_GOODS}.seller_id = ${TABLE.TB_SELLER}.id and ${TABLE.TB_SELLER}.name = ?`;
    return await client.query(query, [sellerName], (error, result, fields) => {
      if (error) {
        console.log(err);
        throw err;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },

  getBySellerId: async (sellerId, results) => {
    const query = `SELECT * FROM ${TABLE.TB_GOODS} WHERE seller_id = ?`;
    return await client.query(query, [sellerId], (error, result, fields) => {
      if (error) {
        console.log(err);
        throw err;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },

  getByPrice: async (price, results) => {
    const query = `SELECT * FROM ${TABLE.TB_GOODS} WHERE price = ?`;
    return await client.query(query, [price], (error, result, fields) => {
      if (error) {
        console.log(err);
        throw err;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },

  getByPriceUpper: async (price, results) => {
    const query = `SELECT * FROM ${TABLE.TB_GOODS} WHERE price >= ?`;
    return await client.query(query, [price], (error, result, fields) => {
      if (error) {
        console.log(err);
        throw err;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },

  getByPriceLower: async (price, results) => {
    const query = `SELECT * FROM ${TABLE.TB_GOODS} WHERE price <= ?`;
    return await client.query(query, [price], (error, result, fields) => {
      if (error) {
        console.log(err);
        throw err;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },

  create: async (name, price, sellerId, results) => {
    const query = `INSERT INTO ${TABLE.TB_GOODS} (name, price, seller_id) VALUES(?, ?, ?)`;
    return await client.query(
      query,
      [name, price, sellerId],
      (error, result, fields) => {
        if (error) {
          console.log(err);
          throw error;
        } else {
          results(JSON.parse(JSON.stringify(result)));
        }
      }
    );
  },

  update: async (results) => {},

  delete: async (results) => {},
};
