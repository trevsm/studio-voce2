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
                                Emily wants each of her students to realize the
                                potential of their unique voice. Her goal is to
                                eliminate destructive self-criticism and to
                                build self-confidence through singing. She
                                believes she can help anyone learn to love their
                                unique voice.
                            </span>
                            <br />
                            <br />
                            <span>
                                Emily???s specialty is the art and science of
                                teaching singing. She will earn her Bachelor of
                                Music in Vocal Pedagogy from Weber State
                                University (anticipated Fall 2022). She has had
                                10+ years of experience in performing in musical
                                theater productions, singing in choirs, and
                                playing piano.
                            </span>
                            <br />
                            <br />
                            <span>
                                Emily guides her students to find their voice
                                using her teaching and performing skills
                                including: breath management, musicianship and
                                artistry in performing, and a musically
                                analytical ear. She is excited to share her
                                knowledge and talent with prospective students
                                who are dedicated and ready to sing smarter.
                            </span>
                        </p>
                    </Col>
                    <Col style={{ minWidth: "300px" }}>
                        <div
                            style={{
                                maxWidth: "400px",
                                marginRight: "auto",
                                position: "relative",
                            }}
                            className="m-center"
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                }}
                            >
                                <Frame />
                            </div>
                            <StaticImage
                                src="../../static/media/emily.jpg"
                                quality="90"
                                placeholder="NONE"
                                alt="Birds"
                                style={{
                                    border: "5px solid white",
                                    background: "white",
                                    borderRadius: "25px",
                                    transform: "scale(0.77) translateY(-30px)",
                                }}
                            />
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
