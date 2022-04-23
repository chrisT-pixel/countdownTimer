import { createTransport } from "nodemailer";
import { Email, EmailAttachement } from "../models/mail";
import { getServerProperty } from "../utils/props";

export const transporter = createTransport({
    host: getServerProperty("email.host") as string,
    port: getServerProperty("email.port") as number,
    secure: false,
    auth: {
        user: getServerProperty("email.username") as string,
        pass: getServerProperty("email.password") as string
    }
});

export const createEmailMessage = (recipient: string, subject: string, text: string, attachment: EmailAttachement): Email => {return {
    from: getServerProperty("email.username") as string,
    to: recipient,
    subject: subject,
    text: text,
    attachments: [
        {
            filename: attachment.filename,
            content: attachment.content,
            contentType: attachment.contentType,
            encoding: attachment.encoding
        }
    ]
}};
