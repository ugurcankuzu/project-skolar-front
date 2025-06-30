"use client";
import { loginSectionChildVariant } from "@/animations/login-signup";
import EPopupColors from "@/enums/popupColors";
import login from "@/helpers/login";
import useLoading from "@/hooks/useLoading";
import { LoginFormSchema, LoginFormValues } from "@/types/loginForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Loader from "../shared/loader";
import PopUp from "../shared/popup";
import GoogleLoginButton from "./googleLoginButton";
import Input from "../shared/input";
import { useRouter } from "next/navigation";

const LoginFormStyles = {
  formContainer: "flex flex-col gap-4",
  inputField: "px-4 py-2 rounded-md border border-heading/35 w-full",
  actionsContainer: "flex flex-col divide-y divide-heading/20",
  loginActionsWrapper: "flex flex-col justify-between gap-4 pb-4",
  submitButton:
    "px-4 py-2 rounded-md font-semibold text-accent cursor-pointer bg-secondary/35 hover:bg-secondary/50 active:bg-secondary/75",
  forgotPasswordLink: "text-accent underline",
  googleButtonWrapper: "w-full flex justify-center items-center py-4",
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onBlur",
  });
  const { loading, startLoading, stopLoading } = useLoading();
  const router = useRouter();
  const onSubmit = async (data: LoginFormValues) => {
    startLoading();
    const response = await login(data);
    if (!response.success) {
      console.log("Login Failed: ", response.message);
      return;
    }
    router.push("/skolar");
    stopLoading();
  };

  return (
    <motion.div variants={loginSectionChildVariant}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={LoginFormStyles.formContainer}
      >
        <Input type="email" placeholder="E-Mail" {...register("email")} />
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <div className={LoginFormStyles.actionsContainer}>
          <div className={LoginFormStyles.loginActionsWrapper}>
            <button type="submit" className={LoginFormStyles.submitButton}>
              {loading ? <Loader /> : "Login"}
            </button>
            <Link
              href={"/forgot-password"}
              className={LoginFormStyles.forgotPasswordLink}
            >
              Forgot password?
            </Link>
          </div>
          <div className={LoginFormStyles.googleButtonWrapper}>
            <GoogleLoginButton />
          </div>
        </div>
        <AnimatePresence>
          {errors.email && (
            <PopUp
              key={"emailComponent"}
              popupColor={EPopupColors.ERROR}
              popupMessage={
                errors.email.message ||
                "An unexpected error occured during your request."
              }
              popupSettings={{
                onClick: () => clearErrors("email"),
              }}
            />
          )}
          {errors.password && (
            <PopUp
              key={"passwordComponent"}
              popupColor={EPopupColors.ERROR}
              popupMessage={
                errors.password.message ||
                "An unexpected error occured during your request."
              }
              popupSettings={{
                onClick: () => clearErrors("password"),
              }}
            />
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
