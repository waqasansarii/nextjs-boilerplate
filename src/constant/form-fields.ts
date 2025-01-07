import { SignIn, SignUp } from "@/types/form_fields";

export const SignUp_Fields: SignUp[] = [
  {
    name: "name",
    id: "1",
    type: "text",
    inputType: "input",
    label: "Full Name",
  },
  {
    name: "email",
    id: "2",
    type: "email",
    inputType: "input",
    label: "Email",
  },
  {
    name: "password",
    id: "3",
    type: "password",
    inputType: "input",
    label: "Password",
  },
  {
    name: "confirmPassword",
    id: "4",
    type: "password",
    inputType: "input",
    label: "Confirm Password",
  },
];

export const SignIn_Fields : SignIn[]=[
    {
        name: "email",
        id: "1",
        type: "email",
        inputType: "input",
        label: "Email",
      },
      {
        name: "password",
        id: "2",
        type: "password",
        inputType: "input",
        label: "Password",
      },
]