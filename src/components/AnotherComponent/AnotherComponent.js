import React from "react";
import Container from "../../shared/components/container/container";
import Button from '@material-ui/core/Button';
import { ButtonGroup } from "@material-ui/core";

function AnotherComponent() {

  return (
    <Container>
      <ButtonGroup color="secondary" aria-label="outlined secondary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Container>
  );
}

export default AnotherComponent;