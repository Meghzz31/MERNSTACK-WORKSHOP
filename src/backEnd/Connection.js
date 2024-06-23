const MONGO_URI = 'mongodb+srv://Megha_Gowda:Megha123@cluster0.litqzhm.mongodb.net/'

const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(MONGO_URI)
        console.log('-:DataBase Connection Successfull:-');
    }
    catch(error){
        console.log(error);
    }
}
module.exports = connectDB