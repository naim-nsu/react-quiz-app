import signupImage from "../../assests/images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration>
          <img src={signupImage} alt="Signup" />
        </Illustration>
        <SignupForm />
      </div>
    </>
  );
}
