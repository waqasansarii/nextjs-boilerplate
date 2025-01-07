"use client";
import { SignUp_Fields } from "@/constant/form-fields";
import React from "react";
import FormGenerator from "../form-generator";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { SignupType } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/lib/validations/auth-schema";
import useSignForm from "@/hooks/use-signup";
import { Spinner } from "@/components/spinner";

const SignupForm = () => {
  const {
    methods: {
      register,
      formState: { errors },
      handleSubmit,
    },
    onSignup,
    loading,
  } = useSignForm();
  return (
    <form onSubmit={handleSubmit(onSignup)}>
      {SignUp_Fields.map((val) => (
        <FormGenerator
          {...val}
          key={val.id}
          register={register}
          errors={errors}
        />
      ))}
      <Button type="submit" className="mt-5 w-full" disabled={loading}>
        {loading ? <Spinner /> : "Submit"}
      </Button>
    </form>
  );
};

export default SignupForm;
