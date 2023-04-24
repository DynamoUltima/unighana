import { Schema, model, models } from "mongoose";



const userSchema = new Schema({

    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
   
   

  
 
}, { timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' }})


const User = models.User || model('User', userSchema);

export default User