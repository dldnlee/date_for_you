import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-white to-primary px-4 py-10">
      <div></div> {/* Spacer for top */}
      <div className="flex flex-col items-center gap-10">
        <Image
          src="/vercel.svg" // Replace with your bot image path
          alt="Bot Logo"
          width={150}
          height={150}
        />
        <Link href="/login" className="border hover:bg-blue-200 border-blue-500 text-blue-500 rounded-full px-8 py-3 font-medium text-lg">
          Get Started
        </Link>
      </div>
      <p className="text-sm text-gray-500">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500">
          Log In
        </a>
      </p>
    </div>
  );
}