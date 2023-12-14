import { Schema , model } from "mongoose";

const busSchema = new Schema({
        busname:{
            type : String,
            required : true
        },
        totalSeats:{
            type:Number,
            required : true
        },
        type:{
              type:Number,
              default : "0"
        },
        busno:{
            type : String,
            required:true
        }
})

const Bus = model ('Bus' , busSchema);
export default Bus;