"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Input from "../components/Input"; 

export default function SignupPage() {
  const router = useRouter();
  
  const [user, setUser] = useState({ 
    userName: "", 
    email: "", 
    password: "" 
  });

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.error("Signup failed", error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <div className="w-full max-w-sm p-8 bg-gray-900 rounded-lg shadow-xl">
        <h1 className="text-white text-3xl font-bold mb-2">Create Account</h1>
        <p className="text-gray-400 mb-6 text-sm">Join us by filling out the details below.</p>
        
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
          label="Email Address"
          id="email"
          type="email"
          placeholder="name@company.com"
          valueKey="email"
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
          onClick={onSignup}
          className="mt-8 w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Sign Up
        </button>

        <p className="text-gray-400 mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}