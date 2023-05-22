// Route Mongo
export const uri = process.env.ME_CONFIG_MONGODB_URL ?? '';
export const dbName = process.env.MONGO_DATABASE ?? '';
export const nomCollection = process.env.MONGO_COLLECTION ?? '';
