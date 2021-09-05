const client = require("../db/client");
const TABLE = require("../db/config");

module.exports = {
  getAll: async (results) => {
    const query = `SELECT * FROM ${TABLE.TB_TRANSACTION}`;
    return await client.query(query, (error, result, fields) => {
      if (error) {
        console.log(error);
        throw error;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },

  getById: async (id, results) => {
    const query = `SELECT * FROM ${TABLE.TB_TRANSACTION} WHERE id = ?`;
    return await client.query(query, [id], (error, result, fields) => {
      if (error) {
        console.log(error);
        throw error;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },

  getByGoodsId: async (goods_id, results) => {
    const query = `SELECT * FROM ${TABLE.TB_TRANSACTION} WHERE goods_id = ?`;
    return await client.query(query, [goods_id], (error, result, fields) => {
      if (error) {
        console.log(error);
        throw error;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },

  getByTxid: async (txid, results) => {
    const query = `SELECT * FROM ${TABLE.TB_TRANSACTION} WHERE txid = ?`;
    return await client.query(query, [txid], (error, result, fields) => {
      if (error) {
        console.log(error);
        throw error;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },

  getByIncomingAddress: async (incomingAddress, results) => {
    const query = `SELECT * FROM ${TABLE.TB_TRANSACTION} WHERE incomingAddress = ?`;
    return await client.query(
      query,
      [incomingAddress],
      (error, result, fields) => {
        if (error) {
          console.log(error);
          throw error;
        } else {
          results(JSON.parse(JSON.stringify(result)));
        }
      }
    );
  },

  create: async (goods_id, incomingAddress, results) => {
    const query = `INSERT INTO ${TABLE.TB_TRANSACTION} (goods_id, incomingAddress) VALUES(?, ?)`;
    return await client.query(
      query,
      [goods_id, incomingAddress],
      (error, result, fields) => {
        if (error) {
          console.log(error);
          throw error;
        } else {
          results(JSON.parse(JSON.stringify(result)));
        }
      }
    );
  },

  updateTxid: async (incomingAddress, newTxid, results) => {
    const query = `UPDATE ${TABLE.TB_TRANSACTION} SET newTxid = ? WHERE incomingAddress = ?`;
    return await client.query(
      query,
      [newTxid, incomingAddress],
      (error, result, fields) => {
        if (error) {
          console.log(error);
          throw error;
        } else {
          results(JSON.parse(JSON.stringify(result)));
        }
      }
    );
  },

  isTransactionPending: async (incomingAddress, results) => {
    const query = `SELECT count(*) FROM ${TABLE.TB_TRANSACTION} WHERE incomingAddress = ? and txid = 'pending'`;
    return await client.query(
      query,
      [incomingAddress],
      (error, result, fields) => {
        if (error) {
          console.log(error);
          throw error;
        } else {
          const [res] = result;
          console.log("count : ", res["count(*)"]);
          results(res["count(*)"] > 0);
        }
      }
    );
  },
};
