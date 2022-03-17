const getConn = require("./dbconn"); //DB connection은 밖에 따로 만들어서 callback으로 언제든 사용할수있게 세팅해둠

exports.getRead = (userid) => {
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `SELECT block, chain, wallet, address FROM tables where userid=${userid}`; //where userid='${id}'
                conn.query(sQuery, (err, result, fields) => { resolve(result);  });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}