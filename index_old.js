const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employee')
.then(()=>console.log('connected'))
.catch(err=>console.error('eoor',err))

const demoSchema=new  mongoose.Schema({
    Name:String,
    Class:String,
    tags:[String],
    date:{ type: Date,default: Date.now},
    isPublished:Boolean


});// crating schema 


const Cource=mongoose.model('name',demoSchema);
// saving document 
async function createCource(){

    const courece=new Cource({
        Name:'react.js',
        Class:'A2',
        tags:['node','backed'],
        isPublished:true
    }); // modeling document 
    const result=await courece.save();
   console.log(result);

}

// querying document 
//find() this fuction return all result 
//select specif name or coloum name
//sort my asc 1 and desc -1
//limit(number) returun the number of rows


//camparisen operator
// eq equal
//neq not equal
//gt grater than 
//lt less than 
//gte grater than equal to 
//lte less than equal to
//in 
//nin not in

// logical opertor
//and 
//or 
//[{}] it will in araayb
async function getCource(){

    // const pageNumber=2
// const pageSize=10
    const coureces=await Cource
   .find({Name:'react.js',isPublished:true})
   // .find({price: {$gte :10 ,$lte:20}})//
  // .find({price :$in [10,15,20]}) example in  price 10 ,15 and 20
 
 // .or([{Name :'react.js'},{isPublished:true}])


 //Regular expression  
 //Starts with mosh
//.find({Name:/^mosh/})
//end with hemdani
//find({Name: /hemdani$/})
// midele or any where mosh
//find({Name:/.*mosh*./})

//pagination
// const pageNumber=2
// const pageSize=10
//     .Skip((pageNumber-2) * pageSize)
//     .limit(pageSize)



    .limit(10)
    .sort({Name:1})
    .select({Name:1,tags:1});
   // .count();

    console.log(coureces);


}
getCource();