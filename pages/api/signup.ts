import type { NextApiRequest, NextApiResponse } from 'next'
import {  hash } from 'bcrypt'
import { connectMongo } from '@/utility/connectToMongo';
import User from '@/model/user';




type Data = {
  name: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {

    await connectMongo();
    console.log(req.body)
    const { firstName, lastName, email, password, } = req.body
    

    const userExist = await User.findOne({ email })
    if (userExist) return res.status(403).json({message:"Email has already been taken", });


    const hashedPassword = await hash(password, 10)
    console.log(hashedPassword);


    const user = await  User.create({ firstName, lastName, email, password: hashedPassword })

    if (user) {


      return res.status(200).
        json({ message: "success", user:{email:user.email,_id:user._id}})

    }

    return res.status(400).json({
      message: "error"
    })


  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ error: error.message })

  }

}