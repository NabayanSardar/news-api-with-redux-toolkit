import { Endpoint } from "../../services/helper/endpoint";
import type {
  LoginPayload,
  SignupPayload,
} from "../../types/interface/auth.interface";
import API from "../api.instance";

export const registerFns = async (data: SignupPayload) => {
  try {
    const response = await API.post(`${Endpoint.auth.signup}`, data);
    return response.data;
  } catch (error: any) {
    const errMessage: string =
      error?.response?.data?.message || "Failed Register";
    return errMessage;
  }
};

export const loginFns = async (data: LoginPayload) => {
  try {
    const response = await API.post(`${Endpoint.auth.login}`, data);
    return response.data;
  } catch (error: any) {
    const errMessage: string =
      error?.response?.data?.message || "Failed Register";
    return errMessage;
  }
};
