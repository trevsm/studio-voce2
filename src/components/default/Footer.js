import React from "react"
import { Section } from "./Section"
import Blob from "../icons/footBlob"
import { Col, Row } from "react-bootstrap"
import Birds from "../icons/birds"
import { Helmet } from "react-helmet"

export function Footer() {
    const date = new Date()
    return (
        <Section spacers={false}>
            <Helmet>
                <style type="text/css">
                    {`
                    
                    ul li{
                        width:fit-content;
                    }
                    #birds{
                        right: 50px;
                    }
                    @media only screen and (max-width: 800px) {
                        #birds{
                            right: 50%;
                            transform: translateX(50%);
                        }
                      }

                    `}
                </style>
            </Helmet>
            <div style={{ position: "relative" }}>
                <Blob />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "30px",
                        left: "30px",
                        transform: "translateY(-50%)",
                    }}
                >
                    <Row
                        className="text-light text-center mb-4"
                        style={{
                            position: "relative",
                            width: "100vw",
                            maxWidth: "70%",
                            margin: "0 auto",
                        }}
                    >
                        <Col
                            style={{ maxWidth: "fit-content" }}
                            className="border-right pr-5"
                        >
                            <ul>
                                <li>Sign&nbsp;up</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </Col>
                        <Col style={{ maxWidth: "fit-content" }}>
                            <ul>
                                <li>Calendar</li>
                                <li>Pricing</li>
                                <li>Studio&nbsp;Policy</li>
                            </ul>
                        </Col>
                        <Col>asdf</Col>
                    </Row>
                </div>
                <div
                    id="birds"
                    style={{
                        position: "absolute",
                        bottom: "30px",
                        width: "100%",
                        maxWidth: "200px",
                    }}
                >
                    <Birds />
                </div>
                <div
                    className="text-light"
                    style={{
                        position: "absolute",
                        bottom: "5px",
                        textAlign: "center",
                        width: "100%",
                    }}
                >
                    © {date.getFullYear()} StudioVoce
                </div>
            </div>
        </Section>
    )
}
