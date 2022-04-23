type EmailBase = {
    subject: string;
    text: string;
};

export type Email = EmailBase & {
    from: string;
    to: string;
    attachments: EmailAttachement[]
}

export type EmailInbound = EmailBase & {
    recipient: string;
    attachment: EmailAttachement;
}

export type EmailAttachement = {
    filename: string;
    content: string;
    contentType: string;
    encoding: string;
}

export const isEmailInbound = (obj: unknown): obj is EmailInbound =>
    (obj as EmailInbound).recipient !== undefined && (obj as EmailInbound).subject !== undefined
     && (obj as EmailInbound).text !== undefined && (obj as EmailInbound).attachment !== undefined