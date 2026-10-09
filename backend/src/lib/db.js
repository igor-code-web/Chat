import mongoose from "mongoose";

export async function connectDB(){
try{
const mongoURL=process.env.DB_URL;

if(!mongoURL){
    throw new Error("mongoURL is required");
}

await mongoose.connect(mongoURL);

console.log("mongo db connected");
}
catch(error){
console.error("mongo db connection error ",error.message);
process.exit(1);
}
}