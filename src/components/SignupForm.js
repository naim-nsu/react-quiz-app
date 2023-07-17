import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [agree, setAgree] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmedPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <Form method="get" styles={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter name"
        icon="person"
      />
      <TextInput
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        icon="alternate_email"
      />
      <TextInput
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        icon="lock"
      />
      <TextInput
        type="password"
        required
        value={confirmedPassword}
        onChange={(e) => setConfirmedPassword(e.target.value)}
        placeholder="Confirm password"
        icon="lock_clock"
      />
      <Checkbox
        required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        text="I agree to the Terms &amp; Conditions"
      />
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
