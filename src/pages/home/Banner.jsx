import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AllCSS from "./All.module.css";
import {HiSearch} from "react-icons/hi";
function Banner() {
  return (
    <div>
      <Container fluid className={AllCSS.banner}>
        <Container>
          <Row className="justify-content-center">
            <Col
              sm={12}
              md={12}
              lg={12}
              className="px-5"
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <h1 className="mt-5 text-light font-weight-bold text-center">
                WELCOME TO GH360 <span>&#128075;</span>
              </h1>
              <p className="text-light text-center">
                The leading platform helping million of Ghanaians experience{" "}
                <strong>24/7</strong> security
              </p>
              <form action="//www.google.com/maps" id="" target="_blank">
                <Row>
                  <Col sm={12} md={12} lg={4} className="mt-2">
                    <label className="text-light" htmlFor="From">
                      From
                    </label>
                    <input
                      type="text"
                      aria-label="From"
                      placeholder="Accra"
                      className="form-control py-2"
                      id=""
                      name="saddr"
                    />
                  </Col>
                  <Col sm={12} md={12} lg={4} className="mt-2">
                    <label className="text-light" htmlFor="To">
                      To
                    </label>
                    <input
                      type="text"
                      aria-label="To"
                      placeholder="Kumasi"
                      className="form-control py-2"
                      id=""
                      name="daddr"
                    />
                  </Col>
                  <Col sm={12} md={12} lg={4} className="mt-2">
                    <div>&nbsp;</div>
                    <input
                      type="submit"
                      value="Search Trip"
                      className="btn btn-primary py-2"
                    />
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Banner;
