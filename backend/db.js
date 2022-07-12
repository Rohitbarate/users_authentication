const mongoose = require('mongoose');
const dbUrl ="mongodb://localhost:27017/pressIt?directConnection=true"

const connectToMongodb = ()=>{
  try {
    mongoose.connect(dbUrl,()=>{
        console.log("connected to mongoDb successfully");
    })

   } catch (error) {
     console.log("could not connect to mongoDb",error)
   }

}

module.exports = connectToMongodb