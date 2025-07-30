import mongoose, { Schema } from "mongoose"

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String },
    countInStock: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema)