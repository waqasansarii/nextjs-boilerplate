import axios from "axios";
import { apiClient } from "../api-client";
import { SignInType } from "@/types/auth";

type Signup = {
  name: string;
  email: string;
  password: string;
};

export const signup = async (data: Signup) => {
  let res =await apiClient.post("/users/signup", data);
  return res;
};

export const signin = async (data: SignInType) => {
  let res =await apiClient.post("/users/login", data,{
    withCredentials:true
  });
  return res;
};

export const logout = async () => {
  let res =await apiClient.post("/users/logout",{},{
    withCredentials:true
  });
  return res;
};

export const userDetail = async()=>{
  return await apiClient.get('/users/profile',{
    withCredentials:true

  })
}
