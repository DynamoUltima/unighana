import User from '@/model/user'
import { connectMongo } from '@/utility/connectToMongo';
import type { NextApiRequest, NextApiResponse } from 'next'
import { compare, hash } from 'bcrypt'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    console.log('called');
    await connectMongo();
    const {  email, password } = req.body
    console.log(email);

    let user = await User.findOne({ email })

    if(user as Object){
      const results = await  compare(password,user.password)


      
      if(results){

        let userData =   await User.findById(user._id).select(' -password ');

        return res.status(200).json({ message:'success',user:userData });
      }else{
       return res.status(200).json({
            message:"Invalid credentials",
         
        })
      }




     
    
    }else{
        res.status(200).json({
            message:"Invalid Email",
         
        })

    }
}

 
