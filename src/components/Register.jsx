import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import styles from "./Register.style.module.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    register(email, password);
  };
  return (
    <Card style={{ width: "50rem" }} className={styles.CardContainer}>
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <Form.Group className="d-flex flex-column align-items-start">
          <Form.Label className="w-100">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
              className="form-control mb-1"
            />
          </Form.Label>
          <Form.Label className="w-100">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
              className="form-control mb-1"
            />
          </Form.Label>
          <Button
            type="submit"
            style={{ width: "10rem" }}
            className="mb-3 d-block mx-auto"
          >
            Register
          </Button>
        </Form.Group>
      </Form>
      <div className="text-center">
        Already have an account? <a href="/login">Login</a>
      </div>
    </Card>
  );
}
