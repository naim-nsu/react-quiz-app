import { Link } from "react-router-dom";
import loginImage from "../../assests/images/login.svg";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <div className="column">
      <Illustration>
        <img src={loginImage} alt="Login" />
      </Illustration>
      <Form className={classes.login} action="#">
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
        />
        <TextInput type="password" placeholder="Enter password" icon="lock" />
        <Button>
          <span>Submit Now</span>
        </Button>
        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </div>
  );
}
