import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import type {
  AuthState,
  LoginPayload,
  SignupPayload,
} from "../../types/interface/auth.interface";
import API from "../../api/api.instance";
import { Endpoint } from "../../services/helper/endpoint";

const token = Cookies.get("token") ?? null;
const user = Cookies.get("user")
  ? JSON.parse(Cookies.get("user") as string)
  : null;
const initialState: AuthState = {
  isLoading: false,
  isError: null,
  token: token,
  user: user,
};

export const registerUserThunk = createAsyncThunk(
  "auth/register",
  async (data: SignupPayload, { rejectWithValue }) => {
    // try {
    //   const res = await registerFns(data);
    //   return res;
    // } catch (error) {
    //   return rejectWithValue(error);
    // }
    try {
      const response = await API.post(`${Endpoint.auth.signup}`, data);
      return response.data;
    } catch (error: any) {
      const errMessage: string =
        error?.response?.data?.message || "Failed Register";
      return rejectWithValue(errMessage);
    }
  },
);

export const loginrUserThunk = createAsyncThunk(
  "auth/login",
  async (data: LoginPayload, { rejectWithValue }) => {
    console.log("data in thunk", data);
    try {
      const response = await API.post(`${Endpoint.auth.login}`, data);
      // return response.data;
    } catch (error: any) {
      const errMessage: string =
        error?.response?.data?.message || "Failed Register";
      return rejectWithValue(errMessage);
    }

    // try {
    //   const res = await loginFns(data);
    //   return res;
    // } catch (error) {
    //   return rejectWithValue(error);
    // }
    // try {
    //   const response = await API.post(`${Endpoint.auth.login}`, data);
    //   return response.data;
    // } catch (error: any) {
    //   const errMessage: string =
    //     error?.response?.data?.message || "Failed Register";
    //   return rejectWithValue(errMessage);
    // }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //register
      .addCase(registerUserThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        console.log("register full fill case", action.payload);
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        console.log("register reject case", action.payload);
      });

    //login
    // .addCase(loginrUserThunk.pending, (state, action) => {
    //   state.isLoading = true;
    //   state.isError = null;
    // })
    // .addCase(loginrUserThunk.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = null;
    //   console.log("login full fill case", action.payload);
    // })
    // .addCase(loginrUserThunk.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = null;
    //   console.log("login reject case", action.payload);
    // });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
