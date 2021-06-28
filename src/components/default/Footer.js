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
                    <div style={{ width: "fit-content", margin: "0 auto" }}>
                        <Row className="text-light mb-4">
                            <Col className="border-right pr-3">
                                <ul>
                                    <li>Sign&nbsp;up</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </Col>
                            <Col className="border-right pr-3">
                                <ul>
                                    <li>Calendar</li>
                                    <li>Pricing</li>
                                    <li>Studio&nbsp;Policy</li>
                                </ul>
                            </Col>
                            <Col className="pr-3">
                                <ul>
                                    <li>asdf</li>
                                    <li>asdf</li>
                                    <li>asdf</li>
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
