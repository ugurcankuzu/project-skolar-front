import { useForm } from "react-hook-form";
import Input from "../shared/input";
import { RegisterFormSchema, RegisterFormValues } from "@/types/signupForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "motion/react";
import PopUp from "../shared/popup";
import EPopupColors from "@/enums/popupColors";
import useLoading from "@/hooks/useLoading";
import Loader from "../shared/loader";
import signup from "@/helpers/signup";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
    mode: "onBlur",
  });
  const { loading, startLoading, stopLoading } = useLoading();
  const onSubmit = async (data: RegisterFormValues) => {
    startLoading();
    const result = await signup(data);
    if (!result.success) {
      alert(result.message);
      return;
    }
    alert(result.message);
    stopLoading();
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="w-full flex gap-2">
          <Input
            type="text"
            placeholder="First Name"
            {...register("firstName")}
          />
          <Input
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
          />
        </div>
        <Input type="email" placeholder="E-Mail" {...register("email")} />
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-md font-semibold text-accent cursor-pointer bg-secondary/35 hover:bg-secondary/50 active:bg-secondary/75"
        >
          {loading ? <Loader /> : "Signup"}
        </button>
      </form>
      <AnimatePresence>
        {Object.entries(errors).map(([key, value]) => (
          <PopUp
            key={key}
            popupColor={EPopupColors.ERROR}
            popupMessage={value.message || "An unexpected error occured."}
            popupSettings={{
              onClick: () => clearErrors(key as keyof RegisterFormValues),
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
