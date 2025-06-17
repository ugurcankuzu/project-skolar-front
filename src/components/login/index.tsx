import FormLogo from "../shared/formLogo";
import LoginForm from "./loginForm";
import LoginSide from "./loginSide";
import LoginTitle from "./loginTitle";

export default function Login() {
  return (
    <LoginSide>
      <FormLogo />
      <LoginTitle />
      <LoginForm />
    </LoginSide>
  );
}
