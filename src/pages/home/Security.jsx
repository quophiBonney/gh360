import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Police from "../../assets/policeman-svgrepo-com.svg";
import FireService from "../../assets/firefighter.png";
import {HiPhone} from "react-icons/hi";
import AllCSS from "./All.module.css";
function Security() {
  return (
    <div>
      <Container className="mt-5 px-5">
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={12}
            lg={3}
            className="mt-3 text-center shadow py-3"
            id={AllCSS.cardContainer}
          >
            <a href="tel:121" className="text-decoration-none">
              <img
                src={Police}
                alt="police svg"
                className="img-fluid img-responsive"
                id={AllCSS.svg}
              />
              <HiPhone className="mt-3" id={AllCSS.phone} />
              <p className="text-center py-3 text-uppercase">Call Police</p>
            </a>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={3}
            className="mt-3 text-center shadow py-3"
            id={AllCSS.cardContainer}
          >
            <a href="tel:121" className="text-decoration-none">
              <img
                src={FireService}
                alt="police svg"
                className="img-fluid img-responsive"
                id={AllCSS.svg}
              />
              <HiPhone className="mt-3" id={AllCSS.phone} />
              <p className="text-center py-3 text-uppercase">
                Call Fire Service
              </p>
            </a>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={3}
            className="mt-3 text-center shadow py-3"
            id={AllCSS.cardContainer}
          >
            <a href="tel:121" className="text-decoration-none">
              <img
                src={Police}
                alt="police svg"
                className="img-fluid img-responsive"
                id={AllCSS.svg}
              />
              <HiPhone className="mt-3" id={AllCSS.phone} />
              <p className="text-center py-3 text-uppercase">Call The Police</p>
            </a>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={3}
            className="mt-3 text-center shadow py-3"
            id={AllCSS.cardContainer}
          >
            <a href="tel:121" className="text-decoration-none">
              <img
                src={Police}
                alt="police svg"
                className="img-fluid img-responsive"
                id={AllCSS.svg}
              />
              <HiPhone className="mt-3" id={AllCSS.phone} />
              <p className="text-center py-3 text-uppercase">Call The Police</p>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Security;
