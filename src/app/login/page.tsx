"use client";

import  { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Input from "../components/Input"; 

export default function LoginPage() {
  const router = useRouter();
  
  const [user, setUser] = useState({ 
    userName: "", 
    email: "", 
    password: "" 
  });

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      router.push("/dashboard");
    } catch (error: any) {
      console.error("Login failed", error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <div className="w-full max-w-sm p-8 bg-gray-900 rounded-lg shadow-xl">
        <h1 className="text-white text-3xl font-bold mb-2">Login</h1>
        <p className="text-gray-400 mb-6 text-sm">Sign in to your account.</p>
        
        <hr className="border-gray-700 mb-4" />

        <Input 
          label="User Name"
          id="userName"
          type="text"
          placeholder="Your UserName"
          valueKey="userName"
          user={user}
          setUser={setUser}
        />

        <Input 
          label="Password"
          id="password"
          type="password"
          placeholder="••••••••"
          valueKey="password"
          user={user}
          setUser={setUser}
        />

        <button 
          onClick={onLogin}
          className="mt-8 w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>

        <p className="text-gray-400 mt-6 text-center text-sm">
          Don't have an account?
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}