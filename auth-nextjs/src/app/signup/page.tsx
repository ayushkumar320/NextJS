"use client"; // It make sures that this is a client component

import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
// import {axios} from "axios";

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="bg-gray-700 flex flex-col items-center justify-center p-12 rounded-lg px-24 border-yellow-400 border">
        <h1 className="text-3xl mb-6">Sign Up</h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input
          className="p-2 border bg-white text-black border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => {
            setUser({...user, username: e.target.value});
          }}
          placeholder="Username"
        />
        <label htmlFor="email">Email</label>
        <input
          className="p-2 border bg-white text-black border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => {
            setUser({...user, email: e.target.value});
          }}
          placeholder="Email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="p-2 border bg-white text-black border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => {
            setUser({...user, password: e.target.value});
          }}
          placeholder="Password"
        />
        <button className="p-2 mt-4 border border-gray-300 rounded-lg mb-4 hover:bg-gray-600 hover:-translate-y-1 cursor-pointer "
        onClick={onSignup}
        >
          Signup Here
        </button>
        <Link href = "/login">
          <button className="p-2 mt-4 border border-gray-300 rounded-lg mb-4 hover:bg-gray-600 hover:-translate-y-1 cursor-pointer "
        >
          Visit Login Page
        </button>
        </Link>
      </div>
    </div>
  );
}
