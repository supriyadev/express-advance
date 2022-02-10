// modeling relationship
// refereceing normization
// e.g
// let author={
//   name:'supriya'
// }
// let course={
//   author:'id'// refrecing id of author documnent
// }
// emaded denormilaization


// demo embeded

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  // for Aray of sub
  authors:[authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}
//array of subobject
createCourse('Node Course', 
[
  new Author({ name: 'Mosh' }),
  new Author({ name: 'supriya' })
]);
