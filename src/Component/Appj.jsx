import React from "react";
import Forms from "./Forms";
import { Container, Row, Col } from "react-bootstrap";
import User from "./Userlist";

const Appj = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <User />
        </Col>
        <Col xs={6} md={2} className="box">
          <Forms />
        </Col>
      </Row>
    </Container>
  );
};

export default Appj;
