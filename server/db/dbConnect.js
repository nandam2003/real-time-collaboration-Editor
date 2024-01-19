const mongoose = require('mongoose')
const chalk = require('chalk')
require('dotenv').config()


const dbConnect = async () => {
    console.log("connecting to DB...")
    mongoose.connect(process.env.DB_URL).then( () => {
        console.log(chalk.green("connected to DB successfully."))
    }).catch((err) => {
        console.log(chalk.red("Error in connecting to DB"))
        console.error(err);
    })
} 

module.exports = dbConnect