import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import type { SignupPayload } from "../../types/interface/auth.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { signupSchema } from "../../services/validation/signup.validation";
import { SingupInputField } from "../../services/json/input-fileds/signup.inputs";
import DynamicInput from "../../components/DynamicInput";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { Endpoint } from "../../services/helper/endpoint";
import API from "../../api/api.instance";
import { registerUserThunk } from "../../store/slices/auth.slice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupPayload>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const registerUser = async (data: SignupPayload) => {
  //   dispatch({type: "START_REGISTER"})
  //   try {
  //     // const response = await axios.post("https://news-blog-api.onrender.com/api/auth/register", data);
  //     const response = await API.post(`${Endpoint.auth.signup}`, data);
  //     console.log("response", response);
  //     dispatch({ type: "COMPLETE_REGISTER", payload: response.data });
  //     return response.data;
  //   } catch (error: any) {
  //     // console.log("error",error.response);
  //     const errMessage: string =
  //       error?.response?.data?.message || "Failed Register";
  //     console.log("error---", errMessage);
  //     dispatch({ type: "FAILD_REGISTER", payload: errMessage });
  //     return errMessage;
  //   }
  // };

  const onSubmit = async (data: SignupPayload) => {
    try {
       const res = await dispatch(registerUserThunk(data)).unwrap();
    console.log("res", res);
    if(res){
      toast.success(res.message);
      navigate("/login")
    }
    } catch (error:any) {
      console.log("error", error);
      toast.error(error)
    }
   
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ maxWidth: "500px" }}>
        <CardContent>
          <Typography variant="h1">Create Account</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
          >
            {SingupInputField?.map((field: any) => (
              <div key={field.label}>
                <DynamicInput
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  register={register}
                  errors={errors}
                />
              </div>
            ))}
            <Button
              variant="contained"
              type="submit"
              disabled={auth?.isLoading}
            >
              {auth?.isLoading ? <CircularProgress /> : "Singup"}
            </Button>
          </Box>
          {auth?.isError && (
            <Typography sx={{ fontSize: "10px", color: "red", mb: 2, mt: 2 }}>
              {auth.isError}
            </Typography>
          )}
          <Typography
            onClick={() => navigate("/")}
            sx={{ display: "flex", color: "blue" }}
          >
            Already have an Account? <span>Login</span>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Signup;
