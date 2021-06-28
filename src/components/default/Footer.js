import React from "react"
import { Section } from "./Section"
import Blob from "../icons/footBlob"
import { Col, Row } from "react-bootstrap"
import Birds from "../icons/birds"
import { Helmet } from "react-helmet"

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
            <Section spacers={false}>
                <div className="footer" style={{ position: "relative" }}>
                    <Blob />
                    <div
                        style={{
                            margin: "0 auto",
                            width: "60%",
                            minWidth: "300px",
                        }}
                    >
                        <Row className="text-light mb-4">
                            <Col className="border-right text-right">
                                <ul>
                                    <li>Sign&nbsp;up</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Calendar</li>
                                    <li>Pricing</li>
                                    <li>Studio&nbsp;Policy</li>
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
