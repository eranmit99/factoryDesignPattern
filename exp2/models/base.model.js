
class BaseModel {
	constructor(dbConnection) {
		this.dbConnection = dbConnection;
	}

	query(sqlQuery) {
 		if (!this.dbConnection) {
 			throw Error('dbConnection was not initilized!');
 		}
		return this.dbConnection.fetchData(sqlQuery);
	}
}

module.exports = BaseModel;