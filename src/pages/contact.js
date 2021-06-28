import React from "react"
import { Row, Col } from "react-bootstrap"
import { Page } from "../components/default"
import { Section } from "../components/default"
import { GeneralContactForm } from "../components/forms"

export default function Contact() {
    return (
        <Page>
            <Section style={{ paddingBottom: "0" }}>
                <Row>
                    <Col>
                        <h4 style={{ textAlign: "center", opacity: ".8" }}>
                            Questions or concerns? <br />
                            Fill out the form below to get in touch.
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ maxWidth: "600px", margin: "0 auto" }}>
                        <GeneralContactForm />
                    </Col>
                </Row>
            </Section>
        </Page>
    )
}
