import User from "../models/user-schema.js";

 const userSignup =async(request,response)=>{
  try{

   const exist= await User.findOne({email:request.body.email});
    if(exist){
      return response.status(401).json({message:"user name already exits"})
    }


    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({message:user})

  }
  catch(error){
   response.status(500).json({message:error.message})
 
  }
} 
export default userSignup;