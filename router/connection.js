const config = {
	user: 'DB_A6478C_autoventa_admin',
	password: 'razors1805',
	server: 'sql5094.site4now.net',
	database: 'DB_A6478C_autoventa',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};


const sql = require('mssql');

let execute = {
	Query : (res,sqlqry)=>{	
		
		//console.log('ejecutando consulta... ' + sqlqry);		

		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {
				if(err){
					//res.send(err.message)
					console.log(err.message)
					res.send('error');
				}else{
					res.send(result);
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
			  res.send('error');
		  })
		} catch (error) {
		  //res.send('Error al ejecutar la consulta: ' + error)   
		  sql.close();
		  res.send('error');
		}
	}
}

module.exports = execute;

