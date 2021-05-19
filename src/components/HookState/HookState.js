import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "../../shared/components/container/container";
function HookState() {
  const [text, setText] = useState("Default value");

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Form.Text className="text-muted">
            El texto ingresado es: {text}
          </Form.Text>
        </Form.Group>
        <Button onClick={() => alert(text)}>Click me</Button>
      </Form>
    </Container>
  );
}

export default HookState;
