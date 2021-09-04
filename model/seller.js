const client = require("../db/client");
const TABLE = require("../db/config");

module.exports = {
  getAll: async (results) => {
    //client.connect();
    const query = `SELECT * FROM ${TABLE.TB_SELLER}`;
    return await client.query(query, (err, result, fields) => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },
  getByName: async (name, results) => {
    const query = `SELECT * FROM ${TABLE.TB_SELLER} WHERE name = ?`;
    return await client.query(query, [name], (error, result, fields) => {
      if (error) {
        console.log(err);
        throw error;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },
  getById: async (id, results) => {
    const query = `SELECT * FROM ${TABLE.TB_SELLER} WHERE id = ?`;
    return await client.query(query, [id], (error, result, fields) => {
      if (error) {
        console.log(err);
        throw error;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },
  getByAddress: async (address, results) => {
    const query = `SELECT * FROM ${TABLE.TB_SELLER} WHERE address = ?`;
    return await client.query(query, [address], (error, result, fields) => {
      if (error) {
        console.log(err);
        throw error;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },
  create: async (name, address, results) => {
    const query = `INSERT INTO ${TABLE.TB_SELLER} (name, address) VALUES(?, ?)`;
    return await client.query(
      query,
      [name, address],
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
  update: async (nameOrigin, nameChange, addressChange, results) => {
    const query = `UPDATE ${TABLE.TB_SELLER} SET name = ?, address = ? WHERE name = ?`;
    return await client.query(
      query,
      [nameChange, addressChange, nameOrigin],
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
  deleteByName: async (name, results) => {
    const query = `DELETE FROM ${TABLE.TB_SELLER} WHERE name = ?`;
    return await client.query(query, [name], (error, result, fields) => {
      if (error) {
        console.log(err);
        throw error;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },
  deleteByAddress: async (address, results) => {
    const query = `DELETE FROM ${TABLE.TB_SELLER} WHERE address = ?`;
    return await client.query(query, [address], (error, result, fields) => {
      if (error) {
        console.log(err);
        throw error;
      } else {
        results(JSON.parse(JSON.stringify(result)));
      }
    });
  },
};
