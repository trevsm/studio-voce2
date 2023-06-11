import React from "react"
import { useState } from "react"
import { Row, Col } from "react-bootstrap"
import { Helmet } from "react-helmet"
import { Page } from "../components/default"
import { Section } from "../components/default"
import { isMobile } from "react-device-detect"

const policyItems = [
    {
        title: "Studio Objectives",
        content: (
            <div className="content">
                <li>
                    ♪ We listen to students' vocal needs and provide solutions.
                </li>
                <li>
                    ♪ We promote healthy vocal techniques through exercises and
                    repertoire.
                </li>
                <li>♪ We inspire appreciation for different music styles.</li>
                <li>
                    ♪ We maintain standards of respect and proper behavior in
                    the studio and performances.
                </li>
            </div>
        ),
    },
    {
        title: "Tuition",
        content: (
            <div className="content">
                <p>Private lessons are one-on-one and are held weekly:</p>
                <p style={{ textAlign: "center" }}>
                    <i>$140 for four 45-minute lessons</i>
                </p>
                <p>
                    Each month includes only 4 lessons, regardless of the number
                    of weeks.
                </p>
                <p>
                    <b>
                        <i>
                            Tuition is due before or at the first lesson of each
                            month.{" "}
                        </i>
                    </b>
                    Late payments will incur a $10 fee. Valid payments: cash,
                    check, or Venmo <i>(@Emily-Marsden-1)</i>. Checks should be
                    made out to <i>“Emily Smith”</i>.
                </p>
            </div>
        ),
    },
    {
        title: "Late/Cancellation Policy",
        content: (
            <div className="content">
                <p>
                    Students must arrive on time for lessons. Late arrivals
                    won't get extra time.
                </p>
                <p>
                    To cancel a lesson, students must notify{" "}
                    <b>at least 24 hours</b> in advance. Lessons cancelled with
                    less than 24 hours notice won't be refunded or rescheduled.
                </p>
                <p>
                    Lessons cancelled with 24 hours notice can be rescheduled{" "}
                    <b>within two weeks</b>
                    of the cancelled lesson. Absences due to illness or
                    emergencies will be considered separately.
                </p>
            </div>
        ),
    },
    {
        title: "Lesson Preparation",
        content: (
            <div className="content">
                <p>
                    <b>Students must come fully prepared.</b> This includes
                    having practiced the assigned amount of time and bringing
                    necessary materials: organized music folder, practice
                    journal, pencil (no pens!), water, and a positive mindset.
                </p>
                <p>
                    Daily practice is essential for progress. The amount of
                    practice will be assigned during lessons. Practice will be
                    tracked through charts/journals brought to every lesson.
                </p>
                <p>
                    <b>Practice</b> includes vocal exercises, sight-singing, and
                    working on repertoire.
                </p>
            </div>
        ),
    },
    {
        title: "Performances",
        content: (
            <div className="content">
                <p>
                    There will be a <b>studio recital</b> at least twice a year
                    (spring and fall). Students will be encouraged to perform at
                    least one song. These performances provide a platform to
                    showcase hard work and talent.
                </p>
            </div>
        ),
    },
]

export default function Policy() {
    const [index, setIndex] = useState(0)
    return (
        <Page>
            <Helmet>
                <style type="text/css">
                    {`
                    .lMenu li button{
                        padding: 5px 10px;
                        background: white;
                        border: none;
                    }
                    .lMenu li{
                        padding: 10px 0;
                        border-left: 1px solid salmon;
                        transition: border-left .1s ease;
                    }
                    .lMenu li.true{
                        border-left: 10px solid salmon;
                    }
                    .content li{
                        margin-bottom: 20px;
                    }
                    p{
                        line-height: 30px;
                    }
                    .content b{
                        color: salmon;
                    }
                    li{
                        list-style-type: none;
                    }

                `}
                </style>
            </Helmet>
            <Section style={{ padding: isMobile ? "10px" : "70px" }}>
                {isMobile ? (
                    <div>
                        <Row>
                            <Col>
                                {policyItems.map((item, i) => (
                                    <div
                                        key={i}
                                        style={{ marginBottom: "70px" }}
                                    >
                                        <h4 style={{ margin: "30px 0 20px 0" }}>
                                            {item.title}
                                        </h4>
                                        {item.content}
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </div>
                ) : (
                    <div>
                        <Row style={{ marginBottom: "100px" }}>
                            <Col>
                                <h3
                                    style={{
                                        width: "fit-content",
                                        paddingBottom: "10px",
                                        color: "var(--dblue)",
                                    }}
                                >
                                    Studio Policy
                                </h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4} className="lMenu">
                                <ul>
                                    {policyItems.map((item, i) => (
                                        <li
                                            key={i}
                                            className={(i === index).toString()}
                                        >
                                            <button onClick={() => setIndex(i)}>
                                                {item.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>{policyItems[index].content}</Col>
                        </Row>
                    </div>
                )}
            </Section>
        </Page>
    )
}
