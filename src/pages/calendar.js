import React, { useState } from "react"
import { Row, Col } from "react-bootstrap"
import { Page } from "../components/default"
import { Section } from "../components/default"
import "react-calendar/dist/Calendar.css"

import Calendar from "react-calendar"

export default function Component() {
    const [value, onChange] = useState(new Date())
    return (
        <Page>
            <Section>
                <Row>
                    <Col>
                        <h4 style={{ textAlign: "center", opacity: ".8" }}>
                            There are currently no upcoming events.
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            className="calendar-parent"
                            style={{
                                margin: "0 auto",
                                width: "fit-content",
                                paddingBottom: "100px",
                            }}
                        >
                            <Calendar value={value} onChange={onChange} />
                        </div>
                    </Col>
                </Row>
            </Section>
        </Page>
    )
}

