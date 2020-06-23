const {API_KEY} = require('../config');
 
 exports.logger = (req,res,next)=>{
     console.log("Inside Logger======");
  next();    
 }