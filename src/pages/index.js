import React from "react"
import { Page, Section, DefaultHeader } from "../components/default"
import { Col, Row, Button } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { SignUpForm } from "../components/forms"
import LineBreak from "../components/icons/lineBreak"

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
                            <span>
                                As a vocal coach with over 10 years of
                                experience in musical theater, choir singing,
                                and piano playing, Emily is passionate about
                                helping her students discover and embrace the
                                unique potential of their voices. She is
                                dedicated to eliminating self-criticism and
                                building self-confidence through singing, and
                                believes that anyone can learn to love their own
                                unique voice.
                            </span>
                            <br />
                            <br />
                            <span>
                                With a bachelor's degree in vocal pedagogy,
                                Emily is well-equipped to guide her students in
                                finding their voices through techniques such as
                                breath management, musical analysis, and
                                artistic performance. If you are ready to sing
                                smarter and are dedicated to improving your
                                skills, Emily is excited to share her knowledge
                                and talent with you.
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
                            <StaticImage
                                src="../../static/media/emily.jpg"
                                quality="90"
                                placeholder="NONE"
                                alt="Emily Marsden"
                                style={{
                                    border: "5px solid white",
                                    background: "white",
                                    borderRadius: "25px",
                                    transform: "scale(0.90)",
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
                <Row className="mb-5">
                    <Col
                        style={{
                            width: "100%",
                            maxWidth: "800px",
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
