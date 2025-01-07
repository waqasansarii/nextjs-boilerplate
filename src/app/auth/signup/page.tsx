import SignupForm from "@/components/forms/signup";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="w-[400px] border-2 rounded-lg p-5 ">
      <h2 className="text-center text-3xl font-bold">Sign up</h2>
      <SignupForm />
      <div className="flex items-center justify-center mt-5">
        <p>do you have an account?</p>
        <Link href={"/auth/signin"} className="font-bold">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
