const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const users=new Schema({
    username: String,
    password: String,
    name: String
})

const todos=new Schema({
    description: String,
    status: String,
    userId: ObjectId
})

// these model will help us to insert in the users and todos collection (collection, schema)
const UserModel=mongoose.model('users',users);
const TodoModel=mongoose.model('todos',todos);
//to do the above, we have to export the model to index.js, how we to this? check below

module.exports={
    UserModel:UserModel,
    TodoModel:TodoModel
}