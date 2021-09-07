import { Form, Button, Card, Alert } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordlRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try {
  //     setError("");
  //     setLoading(true);
  //     await login(emailRef.current.value, passwordlRef.current.value)
  //       .then(() => {
  //         // Signed in
  //         history.push("/");
  //       })
  //       .catch((errorMessage) => {
  //         setError(errorMessage.message);
  //       });
  //     setLoading(false);
  //   } catch {
  //     setError("Failed to sign in 😔");
  //   }
  // }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordlRef.current.value);
      history.push("/");
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }

  return (
    <div className="login">
      <div className="form-container">
        <Card className="card">
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordlRef} required />
              </Form.Group>

              <Button
                disabled={loading}
                className="w-100 login-btn"
                type="submit"
              >
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
