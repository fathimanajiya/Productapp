import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <h2 className="mx-3"> Products</h2>
        <Button variant="success">Add + </Button>
      </Container>
    </div>
  );
}
