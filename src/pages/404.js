import React from "react"
import { Row, Col } from "react-bootstrap"
import { Page } from "../components/default"
import { Section } from "../components/default"

export default function NotFoundPage() {
    return (
        <Page>
            <Section>
                <Row>
                    <Col>404</Col>
                </Row>
            </Section>
        </Page>
    )
}
