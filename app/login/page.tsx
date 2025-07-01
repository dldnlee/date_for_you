

import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-white to-primary px-4 py-10">
      <div></div> {/* Spacer for top */}
      <div className="flex flex-col items-center gap-10 w-full max-w-xs">
        <Image
          src="/vercel.svg" // Replace with your bot image path
          alt="Bot Logo"
          width={150}
          height={150}
        />
        <div className="flex flex-col w-full gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-blue-500 text-white rounded-full px-4 py-3 font-medium">
            Log In
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        Dont have an account?{" "}
        <a href="/signup" className="text-blue-500">
          Sign Up
        </a>
      </p>
    </div>
  );
}