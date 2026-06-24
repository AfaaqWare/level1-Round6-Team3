"use client";
import "../../app/globals.css";
import dynamic from "next/dynamic";
import Link from "next/link";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
});

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Player
        autoplay
        loop
        src="/assets/lottie/No-Data.json" // مسار الملف في فولدر public
        className="mb-8 h-48 w-48"
      />
      <h1 className="mb-4 text-4xl font-bold">404 - الصفحة غير موجودة</h1>
      <p className="mb-6 text-gray-500">يبدو أنك دخلت على مسار غير موجود </p>
      <Link
        href="/"
        className="ds-bg-primary hover:bg-primary-600 rounded-lg px-6 py-3 text-white transition"
      >
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}
