import BrandBar from 'components/BrandBar';
import DeviceList from 'components/DeviceList';
import TypeBar from 'components/TypeBar';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};
export default Shop;
