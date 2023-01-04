import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2"style={{"padding":"200px 0px 0px 0px"}}>
            {<img className="d-flex justify-content-center" width={500}  src='https://uniconexed.org/wp-content/uploads/2022/03/Tec-de-Monterrey-logo-horizontal-blue.png'/> }
          </Col>
        </Row>
      </Container>
  );
}

export default Home;