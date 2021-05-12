import React from "react";
import { Page, Section, DefaultHeader } from "../components/default";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import { SignUpForm } from "../components/forms";

const centerStyle = {
  transform: "translateY(calc(50vh - 50%))",
};

const IndexPage = () => {
  return (
    <Page>
      <Helmet>
        <style type="text/css">
          {`
          span.tab:before {
            content: "____";
            color: transparent;
            pointer-events: none;
          }
          `}
        </style>
      </Helmet>
      <Section className="p-3" fullHeight>
        <Row
          style={{
            ...centerStyle,
          }}
        >
          <Col
            style={{
              minWidth: "300px",
            }}
          >
            <StaticImage
              src="../images/birds.svg"
              quality="100"
              placeholder="NONE"
              alt="Birds"
            />
          </Col>
          <Col
            className="d-flex"
            style={{
              minWidth: "300px",
              alignItems: "center",
            }}
          >
            <div>
              <h1
                className="py-1 px-2 mb-4 text-light"
                style={{
                  background: "salmon",
                  width: "fit-content",
                  fontSize: "23px",
                }}
              >
                Studio Voce
              </h1>
              <h1 className="mb-4" style={{ fontSize: "32px" }}>
                Voice Lessons & Coaching
              </h1>
              <p
                className="mb-5"
                style={{ lineHeight: "27px", fontSize: "17px" }}
              >
                <span
                  style={{
                    color: "#435a69",
                    paddingBottom: "2px",
                  }}
                >
                  Learn to improve your singing skills through weekly
                  personalized lessons, professional feedback, and performance
                  opportunities.{" "}
                  <span style={{ color: "salmon" }}>
                    Discover your unique voice.
                  </span>
                </span>
              </p>
              <Link to="/#sign-up" className="mr-3">
                <Button
                  variant="none"
                  style={{
                    border: "2px solid #435a69",
                    color: "#435a69",
                    padding: "6px 10px",
                  }}
                >
                  Sign up today!
                </Button>
              </Link>
              <Link to="/#about">
                <Button
                  variant="none"
                  style={{
                    color: "#435a69",
                    padding: "6px 10px",
                  }}
                >
                  <span
                    style={{ borderBottom: "1px dashed", paddingBottom: "2px" }}
                  >
                    Learn more
                  </span>
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Section>
      <Section fullHeight id="about">
        <div style={{ ...centerStyle }}>
          <Row className="mb-5">
            <Col>
              <DefaultHeader
                title="About"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </Col>
          </Row>
          <Row>
            <Col style={{ minWidth: "300px" }}>
              <p style={{ lineHeight: "25px", fontSize: "17px" }}>
                <span className="tab">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  pariatur eum recusandae tempora ab, magni vitae. Nemo ullam,
                  animi nam quis rem placeat amet odit numquam sint corrupti
                  adipisci ab. Nemo ullam, animi nam quis rem placeat
                </span>
                <br />
                <br />
                <span>
                  amet odit numquam sint corrupti adipisci, sit amet consectetur
                  adipisicing elit. Id pariatur eum recusandae tempora ab, ab.
                </span>
              </p>
            </Col>
            <Col style={{ minWidth: "300px" }}>
              <div
                className="bg-dark"
                style={{ width: "100%", height: "300px" }}
              ></div>
            </Col>
          </Row>
        </div>
      </Section>
      <Section fullHeight id="sign-up">
        <div style={{ ...centerStyle }}>
          <Row className="mb-5">
            <Col>
              <DefaultHeader
                title="Registration"
                subtitle="Interested in finding out if we'd be a good fit? Fill out the form below to recieve information about how to start lessons!"
              />
            </Col>
          </Row>
          <Row>
            <Col style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
              <SignUpForm />
            </Col>
          </Row>
        </div>
      </Section>
    </Page>
  );
};

export default IndexPage;
