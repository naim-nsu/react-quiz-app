import loginImage from "../../assests/images/login.svg";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

export default function Login() {
  return (
    <div className="column">
      <Illustration>
        <img src={loginImage} alt="Login" />
      </Illustration>
      <LoginForm />
    </div>
  );
}
