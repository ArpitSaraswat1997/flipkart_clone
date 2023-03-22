import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true //space before an after will remove in mae
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },

    phonenumber:{
        type:String,
        required:true,
        trim:true,
    }

})

const user = mongoose.model('user',userSchema)

export default user;


// firstname: 'arpit',
//   lastname: 'saraswat',
//   email: 'arpiverf',
//   password: 'wfwfwf',
//   phonenumber: 'wefefefrv'