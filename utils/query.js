const mysql = require("mysql");
const MYSQL_CONFIG = require("../db/mysql-config"); // 数据库配置

// 连接池：创建多个连接、复用与分发连接
const pool = mysql.createPool(MYSQL_CONFIG);

// 封装sql语句入口
const query = (sql, val) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, val, (err, fields) => {
          if (err) reject(err);
          else resolve(fields);
          connection.release(); // 释放连接资源 | 跟 connection.destroy() 不同，它是销毁
        });
      }
    });
  });
};

module.exports = {
  query
};
