import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
function HookState() {
  const [text, setText] = useState("Default value");

  return (
    <div>
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
        <Button onClick={() => setText("Texto modificado")}>Click me</Button>
      </Form>
    </div>
  );
}

export default HookState;
