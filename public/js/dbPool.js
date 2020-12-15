const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "gj572ofpi2j0wtwv",
    password: "xhwj9t0oc83y953d",
    database: "z6v85vcvb5bkcdal"
});

module.exports = pool;
