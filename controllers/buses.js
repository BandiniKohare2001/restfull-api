import Bus from "../model/bus.js";

const postv1Bus = async (req, res) => {
    const { name, seats,busno,type } = req.body;

    const busbooking = new Bus({
        name, seats,busno,type 
    })

    try {
        const savedBus = await busbooking.save();

        return res.status(201).json({
            success: true,
            data: savedBus,
            message: "bus data add succesfully..!"
        })
    } catch (e) {
        return res.json({
            success: false,
            message: e.message
        })
    }
}

const postv2bus=  async (req, res) => {
    const { name, tatalSeats,busno,type } = req.body;

    const busbooking = new Bus({
        name, tatalSeats,busno,type 
    })

    try {
        const savedBus = await busbooking.save();

        return res.status(201).json({
            success: true,
            data: savedBus,
            message: "bus data add succesfully..!"
        })
    } catch (e) {
        return res.json({
            success: false,
            message: e.message
        })
    }
}

export {postv1Bus,postv2bus}