import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

import { postBusBooking, gelAllPasengerBookings, updatebookings, patchBooking, cancelBookings} from "./controllers/bookings.js";
import { postv1Bus, postv2bus} from "./controllers/buses.js";

const app = express();
app.use(express.json())

const connectdb = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn) {
        console.log('mongodb connected')
    }
}
connectdb();


app.post('/api/bookings', postBusBooking)

app.get('/api/bookings', gelAllPasengerBookings )

app.put('/api/bookings/:id', updatebookings)

app.patch('/api/bookings/:id', patchBooking)

app.delete('/api/bookings/:id', cancelBookings)

app.post('/api/v1/buses', postv1Bus )

app.post('/api/v2/buses', postv2bus)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`);
});