const mssql = require('mssql')

const config = {
    user: "mysecondazureadmin",
    password:"Password123@",
    server: "mysecondazureserver.database.windows.net",
    database: "mysecondazuredatabase",
    port: 1433,
    options: {
        encrypted: true,
    }
}

mssql.connect(config, (err) => {
    if(err) return console.log(err)
    console.log("connected to Azure Database")
})

module.exports = mssql
