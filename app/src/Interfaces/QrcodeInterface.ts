import {ObjectId} from "mongodb";

export interface Qrcode
{
    _id?: ObjectId;
    idKeycloak: string;
    backgroundColor?: string;
    foregroundColor?: string;
    ErrorLevel?: string;
    value?: string;
    size?: number;
    includeMargin?: boolean;
    name?: string;
}

export interface ModelVcard extends Qrcode {
    name?: string;
    firstName?: string;
    lastName?: string;
    job?: string;
    email?: string;
    telephone?: string;
    adresse?: string;
    interface?: string;
}
