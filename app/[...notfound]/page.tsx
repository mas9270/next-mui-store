"use client"
import Link from "next/link";


export default function NotFoundPage() {

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="">
                صفحه مورد نظر یافت نشد
            </div>
            <Link href={"/"} className="text-blue-500 me-2 ms-2 flex items-center justify-center">خانه</Link>
        </div>
    )
}