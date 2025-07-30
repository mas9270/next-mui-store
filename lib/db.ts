const MONGODB_URI = "mongodb://127.0.0.1:27017/next-gpt-store"
import mongoose from "mongoose"

if (!MONGODB_URI) {
  throw new Error("❌ لطفاً MONGODB_URI را وارد کنید")
}

let cached = (global as any).mongoose || { conn: null, promise: null }

export default async function connectDB() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}