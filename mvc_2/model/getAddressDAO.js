const getConn = require("./dbconn");

//


exports.modifyAddress = (userid, address) => {
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `UPDATE userAddrs SET addrs=${address} where userid=${userid}`; //where userid='${id}'
                conn.query(sQuery, (err, result, fields) => { resolve(result);  });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}