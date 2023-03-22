import mongoose from "mongoose";



export const Connection = async(username , password)=>{
    const URL = `mongodb+srv://${username}:${password}@ecommerce.s2jjmp8.mongodb.net/MY-FIRST?retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL)
       console.log("database connect sucessfully");

    }
    catch(error){
       console.log("error while connection ", error.message);
    }
}

export default Connection;