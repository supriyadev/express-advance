const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employee')
.then(()=>console.log('connected'))
.catch(err=>console.error('eoor',err))

const demoSchema=new  mongoose.Schema({
    Name:{type:String,required:true},
    Class:String,
    tags:[String],
    date:{ type: Date,default: Date.now},
    isPublished:Boolean,
    price:Number


});// crating schema



const Cource=mongoose.model('name',demoSchema);
// saving document 
async function createCource(){

    const courece=new Cource({
        Name:'react.js',
        Class:'A2',
        tags:['node','backed'],
        isPublished:true,
        price:10
    });
    try{
        const result=await courece.save();
        console.log(result);
    }
    catch(ex){
        console.log(ex.message);

    }
    
  //  console.log(result);

}


async function getCource(){

    const coureces=await Cource
   .find({name:'react.js',isPublished:true})
  
    .limit(10)
    .sort({Name:1})
    .select({Name:1,tags:1});
    

    console.log(coureces);


}
//getCource();






//upadate query
//2 Approch 
//querying first and then update
// async function updateQuery(id){
//     const cour = await Cource.findById(id);
//     if(!cour) return;
//     cour.set({
       
//         Name:'Angular.js',
//         Class:'A3',

//     });
//     const result=await cour.save();
//     console.log(result);

// }


// async function updateCourse(id) {
//     const result = await Cource.findByIdAndUpdate({ _id: id }, {
//         $set: {
//             Name: "express",
//             Class:"a5"
//         }
//     });
//     console.log(result);
// }

// remove and delete
// async function remove(id){
//     const result= await Cource.deleteOne({_id:id});
//     console.log(result);

  
// }


// remove('61dd57a00488ad420441235c');