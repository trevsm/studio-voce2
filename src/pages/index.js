import React from "react"
import { Page, Section, DefaultHeader } from "../components/default"
import { Col, Row, Button } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { SignUpForm } from "../components/forms"
import LineBreak from "../components/icons/lineBreak"
import Frame from "../components/icons/frame"

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
            <Section className="p-3">
                <Row>
                    <Col
                        style={{
                            minWidth: "300px",
                            textAlign: "center",
                        }}
                    >
                        <StaticImage
                            src="../images/birds.svg"
                            quality="100"
                            placeholder="NONE"
                            alt="Birds"
                            style={{ maxWidth: "350px" }}
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
                                id="callout"
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
                                    Learn to improve your singing skills through
                                    weekly personalized lessons, professional
                                    feedback, and performance opportunities.{" "}
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
                                        style={{
                                            borderBottom: "1px dashed",
                                            paddingBottom: "2px",
                                        }}
                                    >
                                        Learn more
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Section>

            <LineBreak />
            <Section id="about">
                <Row className="mb-5">
                    <Col>
                        <DefaultHeader title="About the instructor" />
                    </Col>
                </Row>
                <Row className="reverse">
                    <Col style={{ minWidth: "300px" }}>
                        <p
                            style={{
                                lineHeight: "25px",
                                fontSize: "17px",
                                maxWidth: "450px",
                                marginLeft: "auto",
                            }}
                            className="px-4 m-center"
                        >
                            <span className="tab">
                                Emily Smith is currently a senior at Weber State
                                Universtity studying vocal pedagogy. Her studies
                                are focused in the art and science of teaching
                                voice. She’s had years of experience in
                                performing classical, opera, and musical
                                theater. Under the guidance of Dr. Karen
                                Bruestle (WSU) Emily has gained several teaching
                                and performing skills including: breath
                                management, musicianship and artistry in
                                performing, and a musically analytical ear.
                            </span>
                            <br />
                            <br />
                            <span>
                                Emily is excited to share her knowledge and
                                talent with prospective students who are
                                dedicated and ready to sing smarter.
                            </span>
                        </p>
                    </Col>
                    <Col style={{ minWidth: "300px" }}>
                        <div
                            style={{ maxWidth: "400px", marginRight: "auto" }}
                            className="m-center"
                        >
                            <Frame />
                        </div>
                    </Col>
                </Row>
            </Section>
            <Section id="sign-up">
                <Row className="mb-5">
                    <Col>
                        <DefaultHeader
                            title="Registration"
                            subtitle="Interested in finding out if we'd be a good fit? Fill out the form below to recieve information about how to start lessons!"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col
                        style={{
                            width: "100%",
                            maxWidth: "600px",
                            margin: "0 auto",
                        }}
                    >
                        <SignUpForm />
                    </Col>
                </Row>
            </Section>
        </Page>
    )
}

export default IndexPage
