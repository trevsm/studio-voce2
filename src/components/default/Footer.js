import React from "react"
import { Section } from "./Section"
import { Col, Row } from "react-bootstrap"
import Birds from "../icons/birds"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export function Footer() {
    const year = new Date().getFullYear()
    return (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
            <Helmet>
                <style type="text/css">
                    {`
                    ul{
                        padding: 0 10px !important;
                    }
                    ul li{
                        list-style-type: none;
                    }
                    `}
                </style>
            </Helmet>
            <Section
                spacers={false}
                style={{
                    background: "rgb(67, 90, 105)",
                    borderRadius: "30px 30px 0 0",
                    padding: "50px",
                }}
            >
                <div className="footer" style={{ position: "relative" }}>
                    <div
                        style={{
                            margin: "0 auto",
                            width: "60%",
                            minWidth: "300px",
                        }}
                    >
                        <Row className="text-light mb-4">
                            <Col>
                                <ul>
                                    <li>
                                        <b
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            Links
                                        </b>
                                    </li>
                                    <br />
                                    <Link to="/#sign-up">
                                        <li>Sign&nbsp;up</li>
                                    </Link>
                                    <Link to="/#about">
                                        <li>About</li>
                                    </Link>
                                    <Link to="/calendar">
                                        <li>Events</li>
                                    </Link>
                                    <Link to="/studio-policy">
                                        <li>Studio Policy</li>
                                    </Link>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>
                                        <b
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            Social
                                        </b>
                                    </li>
                                    <br />
                                    <a href="https://facebook.com">
                                        <li>Facebook</li>
                                    </a>
                                    <a href="https://instagram.com">
                                        <li>Instagram</li>
                                    </a>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>
                                        <b
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            Contact
                                        </b>
                                    </li>
                                    <br />
                                    <li>Email: hello@voce.studio</li>
                                    <br />
                                    <li>West Bountiful, UT 84010</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div className="text-light" style={{ textAlign: "center" }}>
                        <Birds /> © {year} StudioVoce
                    </div>
                </div>
            </Section>
        </div>
    )
}

