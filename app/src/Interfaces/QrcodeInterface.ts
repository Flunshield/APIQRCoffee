import {ObjectId} from "mongodb";

export interface Qrcode
{
    _id?: ObjectId;
    idKeycloak: string;
    backgroundColor?: string;
    ForegroundColor?: string;
    ErrorLevel?: string;
    value?: string;
    size?: number;
    includeMargin?: boolean;
    name?: string;
}
