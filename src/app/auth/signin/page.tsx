// 'use client'
import SigninForm from "@/components/forms/signin";
import { useAuthContext } from "@/context/auth-context";
import Link from "next/link";
import React from "react";

type Props = {};

const Signin = (props: Props) => {
  // const {user,error} = useAuthContext()
  // console.log(user,error)
  return (
    <div className="w-[400px] border-2 rounded-lg p-5 ">
      <h2 className="text-center text-3xl font-bold">Sign In</h2>
      <SigninForm />
      <div className="flex items-center justify-center mt-5">
        <p>if you have'nt an account?</p>
        <Link href={"/auth/signup"} className="font-bold">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Signin;
