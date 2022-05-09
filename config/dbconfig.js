const mongoose = require('mongoose')
const env = process.env.NODE_ENV
require('dotenv').config();

const db_credential = JSON.parse(process.env[env])

//const connectionString = db_credential.mongoprefix + /* db_credential.username + ':' + db_credential.password + '@' + */ db_credential.host + ':' + db_credential.port + '/' + db_credential.database; // There was an issue while connecting mongodb with development username and password

const connectionString = `${db_credential.mongoprefix}${db_credential.user}:${db_credential.password}@${db_credential.host}/${db_credential.database}?retryWrites=true&w=majority`

console.log('connectionString :>> ', connectionString);

const connection = mongoose.connect(connectionString, (err, db) => {

    if (err) {

        console.error(err);

        throw new Error('Unable to connect MongoDB');

    }

    console.log(`###### Connected to MongoDB! ###### ${connectionString}`);
});

module.exports = {

    sequelize: connection

}