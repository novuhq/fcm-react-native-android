import { newNotif } from "../novu/novu.js";

export const createNotif = async (req, res) => {

    try {
        const { title, body } = req.body

        console.log('title is this;', title)
        console.log('before new notif')

        await newNotif(title, body);

        console.log('after new notif')

        res.status(201).json({ message: 'success' });
    } catch (error) {
        console.log('hey this is error', error)
        res.status(409).json({ message: error.message });
    }
}