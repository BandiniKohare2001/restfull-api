import book from "../model/booking.js";

const postBusBooking = async (req, res) => {
    const { name, age, to, from, adult } = req.body;

    const booking = new book({
        name, 
        age, 
        to, 
        from, 
        adult
    })

    try {
        const savePasenger = await booking.save();

        return res.status(201).json({
            success: true,
            data: savePasenger,
            message: "Booking succesfully..!"
        })
    } catch (e) {
        return res.json({
            success: false,
            message: e.message
        })
    }
}


const gelAllPasengerBookings = async (req, res) => {
    const allPasenger = await book.find();

    res.status(200).json({
        success: true,
        data: allPasenger,
        message: "fetch all booking"
    })
}

const updatebookings = async (req, res) => {
    const { id } = req.params;
    const { name, age, to, from, adult } = req.body;

    await book.updateOne({ _id: id }, {
        $set: {
            name: name,
            age: age,
            adult: adult,
            to: to,
            from: from
        }
    })

    const updatePasenger = await book.findOne({ _id: id })

    res.status(200).json({
        success: "true",
        data: updatePasenger,
        message: "Updated successfully..!"
    })

}

const patchBooking =  async (req, res) => {
    const { id } = req.params;
    const { name, age, to, from, adult } = req.body;

    await book.updateOne({ _id: id }, {
        $set: {
            name: name,
            age: age,
            adult: adult,
            to: to,
            from: from
        }
    })

    const updatedCustmer = await book.findOne({ _id: id })

    res.status(200).json({
        success: "true",
        data: updatedCustmer,
        message: "Updated successfully..!"
    })

}

const cancelBookings = async(req,res)=>{
    const { id } = req.params

    await book.deleteOne({ _id: id })

    res.status(204).json({
        success: "true",
        message: "Data delete succesfully..!"
    })
}

export {postBusBooking, gelAllPasengerBookings, updatebookings, patchBooking, cancelBookings}