"use client";
import { signup } from "@/lib/services/auth-api";
import { SignupSchema } from "@/lib/validations/auth-schema";
import { SignupType } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useSignForm = () => {
  const route = useRouter()
  const [loading, setLoading] = useState(false);
  const methods = useForm<SignupType>({
    resolver: zodResolver(SignupSchema),
    mode: "onChange",
  });

  const onSignup = async (values: SignupType): Promise<void> => {
    console.log(values);
    let data={
      name:values.name,
      email:values.email,
      password:values.password
    }
    try {
      setLoading(true)
      const res = await signup(data)
      console.log(res)
      if(res.status ==201){
        setLoading(false)
        toast('Account created successfully!')
        route.push('/auth/signin')
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

export default useSignForm;
