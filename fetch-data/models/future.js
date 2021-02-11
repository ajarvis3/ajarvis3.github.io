import mongoose from 'mongoose';

const futureSchema = new mongoose.Schema({
    name: String,
    description: String
}, {collection: "future"});

const Future = new mongoose.model("Future", futureSchema);

export default Future;
