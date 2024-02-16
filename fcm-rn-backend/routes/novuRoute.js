import express from "express";
// import { newNotif } from "../novu/novu.js";

import { createNotif } from "../controller/notif.js";

const router = express.Router();

router.post('/create', createNotif)

export default router;