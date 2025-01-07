"use client";
import { signin, signup } from "@/lib/services/auth-api";
import { SignInSchema, SignupSchema } from "@/lib/validations/auth-schema";
import { SignInType, SignupType } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useSignInForm = () => {
  const route = useRouter()
  const [loading, setLoading] = useState(false);
  const methods = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    mode: "onChange",
  });

  const onSignup = async (values: SignInType): Promise<void> => {
    // console.log(values);
    let data={
      email:values.email,
      password:values.password,
    }
    try {
      setLoading(true)
      const res = await signin(data)
      console.log(res)
      if(res.status ==200){
        route.push('/dashboard')
        setLoading(false)
        toast('logged in successfully!')
      }

    } catch (err: any) {
      setLoading(false)
      console.log('error',err)
      toast("Error", {
        description: err,
      });
    }
  };

  return {
    methods,
    onSignup,
    loading
  };
};

export default useSignInForm;
