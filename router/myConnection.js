var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'mysql5043.site4now.net',
    user: 'a6478c_constru',
    password: 'razors1805',
    database: 'db_a6478c_constru'
});

let myExecute = {
    Query: (res, qry) => {

        try {
            pool.query(qry, function (error, results, fields) {
                if (error) throw error;
                console.log('The solution is: ', results[0].solution);
                res.send(results);
            });
        } catch (error) {
            res.send('error: ' + error);
        }

    }
}

module.exports = myExecute;