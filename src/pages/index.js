import React from "react"
import { Page, Section, DefaultHeader } from "../components/default"
import { Col, Row, Button } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { SignUpForm } from "../components/forms"
import LineBreak from "../components/icons/lineBreak"
import { Box, Typography } from "@mui/material"

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
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block",
                            },
                        }}
                    >
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
                            />
                        </Col>
                    </Box>
                    <Col
                        className="d-flex"
                        style={{
                            minWidth: "300px",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <Typography variant="h3" component="h1">
                                Voice Lessons & Coaching
                            </Typography>
                            <Typography variant="h6" component="h2" my={3}>
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
                            </Typography>
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
                                With over 10 years of hands-on experience in
                                musical theater, choir singing, and piano, Emily
                                loves to bring out the best in her students'
                                voices. She believes in the power of singing and
                                is sure that everyone can grow to appreciate
                                their own unique voice.
                            </span>
                            <br />
                            <br />
                            <span>
                                Having a bachelor's degree in how to teach
                                singing, Emily is well-prepared to guide her
                                students in uncovering their voices using easy
                                methods. These include how to breathe while
                                singing, how to understand music, and how to
                                perform with feeling. If you're ready to learn
                                new ways to sing and committed to getting
                                better, Emily is excited to share her knowledge
                                and love for singing with you.
                            </span>
                        </p>
                    </Col>
                    <Col style={{ minWidth: "300px" }}>
                        <Box
                            sx={{
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
                        </Box>
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
