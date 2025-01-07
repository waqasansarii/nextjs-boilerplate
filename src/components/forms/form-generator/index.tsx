import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignupType } from "@/types/auth";
import {
  FieldErrors,
  FieldName,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type Props = {
  label: string;
  name: string;
  id: string;
  type: string;
  inputType: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
};

const FormGenerator = ({
  label,
  name,
  id,
  type,
  inputType,
  register,
  errors,
}: Props) => {
  
  return (
    <>
      <Label htmlFor={label} id={id} className="mt-3 flex flex-col font-medium">
        {label}
        <Input type={type} id={label} {...register(name)} className="mt-1" />
        <ErrorMessage
          name={name}
          errors={errors}
          render={({ message }) => (
            <p className="text-red-400 my-2">
              {message === "Required" ? "" : message}
            </p>
          )}
        />
      </Label>
    </>
  );
};

export default FormGenerator;
