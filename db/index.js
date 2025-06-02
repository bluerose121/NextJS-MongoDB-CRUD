import { MongoClient } from 'mongodb';

let client;

try {
    if (!process.env.MONGODB_URL) {
        throw new Error("MongoDB URL is required");
    }

    client = new MongoClient(process.env.MONGODB_URL);
    client.connect();

} catch (e) {
    console.log(e)
}

export default client;