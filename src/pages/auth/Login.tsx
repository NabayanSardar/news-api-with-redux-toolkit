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
import type { LoginPayload } from "../../types/interface/auth.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../services/validation/login.validation";
import { LoginInputField } from "../../services/json/input-fileds/login.inputs";
import DynamicInput from "../../components/DynamicInput";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { loginrUserThunk } from "../../store/slices/auth.slice";

const Login = () => {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginPayload) => {
    console.log("data", data)
    try {
      const res = await dispatch(loginrUserThunk(data)).unwrap();
      console.log("res", res);
    } catch (error: any) {
      console.log("error", error);
      toast.error(error);
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
          <Typography variant="h1">Login </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
          >
            {LoginInputField?.map((field: any) => (
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
            <Button variant="contained" type="submit" disabled={auth.isLoading}>
              {auth.isLoading ? <CircularProgress /> : "Login"}
            </Button>
          </Box>
          {auth.isError && (
            <Typography sx={{ fontSize: "10px", color: "red", mb: 2, mt: 2 }}>
              {auth.isError}
            </Typography>
          )}
          <Typography
            onClick={() => navigate("/signup")}
            sx={{ display: "flex", color: "blue" }}
          >
            Create and Account? <span>Signup</span>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
