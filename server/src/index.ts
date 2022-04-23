import express, {Express, json, urlencoded} from "express";
import { EmailInbound, isEmailInbound } from "./models/mail";
import { createEmailMessage, transporter } from "./utils/mail-util";
import { getServerProperty } from "./utils/props";
import cors from "cors";

const port = getServerProperty("server.port") as number;

const app: Express = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }))

app.post(getServerProperty("server.endpoint.sendemail") as string, (req, res) => {
    if (!isEmailInbound(req.body)) {
        res.status(400).end();
        console.log("Wrong format");
        return;
    }

    const email: EmailInbound = req.body as EmailInbound;
    transporter.sendMail(createEmailMessage(email.recipient, email.subject, email.text, email.attachment), (err) => {
        console.log(err);
    });
    res.sendStatus(200);
});

app.listen(port);
