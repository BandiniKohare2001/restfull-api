import { Schema , model } from "mongoose";

const bookingSchema = new Schema({
        name:{
            type : String,
            required : true
        },
        age:{
            type:Number,
            required : true
        },
        adult:{
              type:Number,
              default : "0"
        },
        to:{
            type : String,
            required:true
        },
        from:{
            type : String,
            required:true
        }
})

const book = model ('book' , bookingSchema);
export default book;