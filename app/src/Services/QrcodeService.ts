import {ModelVcard, Qrcode} from "../Interfaces/QrcodeInterface";
import {MongoClient, ObjectId} from "mongodb";
import {dbName, nomCollectionQrcode, nomCollectionVcard, uri} from "../Constante/Route";

export async function pushQrcode(data: Qrcode) {
    const document = {
        idKeycloak: data.idKeycloak,
        name: data.name,
        backgroundColor: data.backgroundColor,
        foregroundColor: data.foregroundColor,
        errorLevel: data.ErrorLevel,
        value: data.value,
        size: data.size,
        includeMargin: data.includeMargin,
        dateCreation: new Date(),
    };
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection(nomCollectionQrcode);
    await collection.insertOne(document);
    await client.close();
}

export async function pushVcard(data: ModelVcard) {
    const document = {
        idKeycloak: data.idKeycloak,
        backgroundColor: data.backgroundColor,
        foregroundColor: data.foregroundColor,
        value: data.value,
        size: data.size,
        includeMargin: data.includeMargin,
        dateCreation: new Date(),
    };
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection(nomCollectionVcard);
    await collection.insertOne(document);
    await client.close();
}

export async function getAllQrcodes() {
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection(nomCollectionQrcode);
    const qrcodes = await collection.find().toArray();
    await client.close();
    if (qrcodes.length > 0) {
        return qrcodes;
    } else {
        throw new Error("Qrcode not found.");
    }
}

export async function getQrcodeById(userId: string) {
    const data = userId;
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection(nomCollectionQrcode);
    const qrcodes = await collection.find({"idKeycloak": data}).toArray();
    await client.close();
    if (qrcodes.length > 0) {
        return qrcodes;
    } else {
        return [];
    }
}

export async function getVcardById(userId: string) {
    const data = userId;
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection(nomCollectionVcard);
    const vCard = await collection.find({"idKeycloak": data}).toArray();
    await client.close();
    if (vCard.length > 0) {
        return vCard;
    } else {
        return [];
    }
}

export async function deleteQrcode(data: Qrcode) {
    const document = {
        idKeycloak: data.idKeycloak,
        idQrcode: data._id
    };
    const objectId = new ObjectId(document.idQrcode);
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection(nomCollectionQrcode);

    // Vérifie si le document existe dans la collection
    const existingDocument = await collection.findOne({$and: [{"_id": objectId}, {"idKeycloak": document.idKeycloak}]});
    if (!existingDocument) {
        return null;
    }

    // Supprime le document et attend la fin de la suppression
    await collection.deleteOne({$and: [{"_id": objectId}, {"idKeycloak": document.idKeycloak}]});
}

export async function deleteVcard(data: ModelVcard) {
    const document = {
        idKeycloak: data.idKeycloak,
        idVcard: data._id
    };
    console.log(document)
    const objectId = new ObjectId(document.idVcard);
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection(nomCollectionVcard);

    // Vérifie si le document existe dans la collection
    const existingDocument = await collection.findOne({$and: [{"_id": objectId}, {"idKeycloak": document.idKeycloak}]});
    if (!existingDocument) {
        return null;
    }

    // Supprime le document et attend la fin de la suppression
    await collection.deleteOne({$and: [{"_id": objectId}, {"idKeycloak": document.idKeycloak}]});
}
