const mssql = require('mssql')

const getCustomerSales = async(req, res) => {
    await mssql.query("SELECT * FROM SalesLT.Customer", (err, result) => {
        if(err) return console.log(err)
        return res.status(200).json({result})
    })
}

module.exports = {
    getCustomerSales,
}
