"use client";
import React, { ChangeEvent } from "react";

interface UserState {
  userName: string;
  email: string;
  password: string;
}

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  valueKey: keyof UserState; // Only allows "userName", "email", or "password"
  user: UserState;           // The current state object
  setUser: React.Dispatch<React.SetStateAction<UserState>>; // Function to update state
}

const Input: React.FC<InputProps> = ({ 
  label, id, type, placeholder, valueKey, user, setUser 
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-white mt-4 text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        className="text-white mt-1 mb-2 p-2 rounded-md bg-gray-800 border-gray-600 border-2 focus:border-blue-500 outline-none transition-all"
        type={type}
        id={id}
        value={user[valueKey]}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setUser({ ...user, [valueKey]: e.target.value });
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;