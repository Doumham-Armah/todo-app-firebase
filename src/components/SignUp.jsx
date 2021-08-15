import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const SignUp = () => {
  const emailRef = useRef();
  const passwordlRef = useRef();
  const passwordConfirmlRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordlRef.current.value !== passwordConfirmlRef.current.value) {
      return setError("Passwords don't match! 🙅‍♂️");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordlRef.current.value)
        .then(() => {
          // Signed in
          history.push("/");
        })
        .catch((errorMessage) => {
          setError(errorMessage.message);
        });
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }

  return (
    <div className="form-container">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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

            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmlRef}
                required
              />
            </Form.Group>

            <Button
              disabled={loading}
              className="w-100 signup-btn"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default SignUp;
