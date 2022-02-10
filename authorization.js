//differeence 
// authontication is to get the access read
// authorization is get the opation done


const { async } = require('jshint/src/prod-params');
const mongoose=require('mongoose');
const Joi =require('joi');

mongoose.connect('mongodb://localhost/employee')
.then(()=>console.log('connected'))
.catch(err=>console.error('eoor',err))
//cearting schema 
const User=mongoose.model('User',new mongoose.Schema({
name:{
    type:String,
    required:true,
    minlength:5,
    maxlength:20

},
email:{
    type:String,
    required:true,
    minlength:5,
    maxlength:255,
    unique:true
},
password:{
    type:String,
    required:true,
    minlength:7,
    maxlength:1024

}
}));
async function crateUser(){
    const Username=new User({
        name:'supriya',
        email:'supriya@1234',
        password:'67yghjnbv'
    });
    const userinfo=await Username.save();
    console.log(userinfo);

}
//  crateUser();
function validation(User){
    // const schema = Joi.object({
    //     name: Joi.string().min(4).required()
    //     });
        const schema=Joi.object({
            name:Joi.string().min(5).max(20).required()
        });
       const result=schema.validate(User);
       console.log(result);
} 

