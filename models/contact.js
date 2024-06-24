const mongoose = require("mongoose");
const {Schema,model} = mongoose;
const contactSchema = new Schema({
    firstname:{
        type:String,
        required: true,
    },
    lastname:{
        type:String,
        required:true,
    },
    country:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        default: "NA",
        set: (v) =>
            v === "" ? "NA" : v,
    
    },
    subject:{
        type: String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
const Contact = model("Contact",contactSchema);
module.exports=Contact;