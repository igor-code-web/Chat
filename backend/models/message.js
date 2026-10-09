import mongoose from 'mongoose'

const messageSchema =new mongoose.Schema({
senderId:{
    type:mongoose.Types.ObjectId,
    ref:"User",
    required: true,
},
receiverId:{
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
},
msg:{
    type:String,
},
image:{
    type: String,
},
video:{
    type: String,
}


}
,{timestamps:true});

const Message=mongoose.model("message",messageSchema);

export default Message;
