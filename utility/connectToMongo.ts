//password qkdah68ttfWMZW5K
import mongoose from "mongoose";

// const uri = "mongodb+srv://dynamojoey:qkdah68ttfWMZW5K@cluster0.oy0ezya.mongodb.net/?retryWrites=true&w=majority";

const uri= "mongodb+srv://dynamojoey:qkdah68ttfWMZW5K@cluster0.oy0ezya.mongodb.net/test"

export const connectMongo = async() => mongoose.connect(uri) 