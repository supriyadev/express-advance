//_id: objID(61e52ab77aa651eda0cbfd3c) //24 numer consist
//  total 12 Byte
//  4 byte for timestap
//  3 byte for machine identifiers
// 2 bytes for process identifier
// 3 byte counter


// 1 byte is 8 bit
// 2^8 is 256
// 2^16 is 16M

// //Driver create every tym uniqui number for mongodb
// diriver ->mongodb


//create manually objId
const mongoose = require('mongoose');
const id=new mongoose.Types.ObjectId();
// console.log(id);// uniqui id 

// console.log(id.getTimestamp());// get time stamp 
const isvalid=mongoose.Types.ObjectId.isValid('cd');
console.log(isvalid);
