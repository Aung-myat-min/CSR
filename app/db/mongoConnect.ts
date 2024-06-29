import mongoose from "mongoose";

const connection = {
  isConnected: 0,
};

async function connectMongo() {
  if (connection.isConnected) {
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGO_URI!);
  connection.isConnected = db.connections[0].readyState;
  console.log("MongoDB connected to:", db.connections[0].host);
}

export default connectMongo;
