import React, { MutableRefObject, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

const Login = ({ onIdSubmit }: { onIdSubmit: any }) => {
  const idRef = useRef() as MutableRefObject<HTMLInputElement>;

  function handleSubmit(e: any) {
    e.preventDefault();

    onIdSubmit(idRef.current.value);
  }

  function createNewId() {
    onIdSubmit(uuidV4());
  }

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group className="mb-2">
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="me-2">
          Login
        </Button>
        <Button variant="secondary" onClick={createNewId}>
          Create A New Id
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
