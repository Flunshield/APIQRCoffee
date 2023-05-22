import {deleteQrcode, getQrcodeById, pushQrcode} from "./Services/QrcodeService";
import express, {Application, Request, Response} from "express";
import bodyParser from "body-parser";
import {verifyJwt} from "./MiddleWare/jwt-utils";
import {Qrcode} from "./Interfaces/QrcodeInterface";

require('dotenv').config();

const cors = require('cors')
const app: Application = express();
const port: number = 3000;

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.post('/pushQrcode', verifyJwt("User"), (req: Request, res: Response, err) => {
    try {
        const data: Qrcode = req.body
        pushQrcode(data)
        res.status(200).send('Ok');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.get('/getQrcode/:id', verifyJwt("User"), async (req: Request, res: Response, err) => {
    try {
        const data: string = req.params.id
        const tabQrCode = await getQrcodeById(data)
        res.json(tabQrCode)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.delete('/deleteQrcode', verifyJwt("User"), async (req: Request, res: Response, err) => {
    try {
        const data: Qrcode = req.body
        await deleteQrcode(data)
        const tabQrCode = await getQrcodeById(data.idKeycloak)
        res.json(tabQrCode)
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});
app.listen(port, () => {
    console.log(`connecter parfaitement au port ${port}`)
});
