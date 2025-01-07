'use client'
import React from "react";
import FormGenerator from "../form-generator";
import { SignIn_Fields } from "@/constant/form-fields";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import useSignInForm from "@/hooks/use-signin";

const SigninForm = () => {
  const {
    methods: {
      register,
      formState: { errors },
      handleSubmit,
    },
    onSignup,
    loading,
  } = useSignInForm();

  return (
    <form onSubmit={handleSubmit(onSignup)}>
      {SignIn_Fields.map((val) => (
        <FormGenerator
          {...val}
          key={val.id}
          register={register}
          errors={errors}
        />
      ))}
      <Button type="submit" className="mt-5 w-full" disabled={loading}>
        {loading ? <Spinner /> : "Login"}
      </Button>
    </form>
  );
};

export default SigninForm;
