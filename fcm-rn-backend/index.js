import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv";
import notificationRoute from './routes/novuRoute.js'
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use('/api/v1', notificationRoute)
app.listen(8001, () => {
    console.log('listening on 8001')
})

app.get('/', (req, res) => {
    res.send('Project running!')
})
