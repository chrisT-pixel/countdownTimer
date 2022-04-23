import { createTransport } from "nodemailer";
import { Email, EmailAttachement } from "../models/mail";
import { getAppProperty } from "../utils/props";

export const transporter = createTransport({
    host: getAppProperty("email.host") as string,
    port: getAppProperty("email.port") as number,
    secure: false,
    auth: {
        user: getAppProperty("email.username") as string,
        pass: getAppProperty("email.password") as string
    }
});

export const createEmailMessage = (recipient: string, subject: string, text: string, attachment: EmailAttachement): Email => {return {
    from: getAppProperty("email.username") as string,
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
