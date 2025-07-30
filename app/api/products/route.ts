import connectDB from "@/lib/db"
import { Product } from "@/models/products"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await connectDB()
        const products = await Product.find().lean()
        return NextResponse.json(products)
    } catch (error) {
        console.error("خطا در دریافت محصولات:", error)
        return NextResponse.json({ message: "خطا در دریافت محصولات" }, { status: 500 })
    }
}