"use client";
import UserForm from "./FormikYup/UserLoginwithFormik";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col border border-rose-500 w-full h-full justify-center items-center">
      <UserForm />
    </div>
  );
}
