import React from "react"
import { useState } from "react"
import { Row, Col } from "react-bootstrap"
import { Helmet } from "react-helmet"
import { Page } from "../components/default"
import { Section } from "../components/default"

const policyItems = [
    {
        title: "Studio Objectives",
        content: (
            <div className="content">
                <li>
                    ♪ To listen to and analyze the student&rsquo;s vocal needs
                    and provide the proper solution.
                </li>
                <li>
                    ♪ To encourage healthy vocal technique through exercises and
                    repertoire.
                </li>
                <li>
                    ♪ To inspire an appreciation for various styles of music.
                </li>
                <li>
                    ♪ To establish standards of respect and appropriate behavior
                    in the studio, performances, and other performance settings.
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
                    <i>$140 – four 45-minute lessons</i>
                </p>
                <p>
                    There are only 4 lessons per month. If a month has 5 weeks,
                    we will still only have 4 lessons that month.
                </p>
                <p>
                    <b>
                        <i>
                            Tuition is due before or at the first lesson of each
                            month.
                        </i>
                    </b>
                    Late payments will incur a $10 fee. Valid forms of payment
                    include: cash, check, or Venmo. <i>(@Emily-Marsden-1)</i>{" "}
                    Checks should be made out to <i>“Emily Smith”</i>.
                </p>
            </div>
        ),
    },
    {
        title: "Late/Cancellation Policy",
        content: (
            <div className="content">
                <p>
                    Students are expected to be on time to their lessons. No
                    time will be given to accommodate late arrivals; the lesson
                    will end at the scheduled time.
                </p>
                <p>
                    In the event a student needs to cancel a lesson, they must
                    give notice <b>at least 24 hours</b> before the scheduled
                    lesson time. If notice is given with less than 24 hours
                    notice, the lesson will be forfeited with no refund or
                    make-up lesson
                </p>
                <p>
                    Students will have the opportunity to schedule a make-up
                    lesson when a lesson is cancelled with at least 24 hours
                    notice. The student must schedule a make-up lesson{" "}
                    <b>within two weeks</b> of the cancelled lesson, otherwise,
                    the lesson will be forfeited with no refund. Excessive
                    absences due to illness or family emergencies will be
                    handled on a case-by-case basis.
                </p>
            </div>
        ),
    },
    {
        title: "Lesson Preparation",
        content: (
            <div className="content">
                <p>
                    <b>
                        Students should come fully prepared for their lessons.
                    </b>{" "}
                    This means that the student has practiced the assigned
                    amount of time, and brought all necessary materials needed
                    for the lesson. These materials include: music in organized
                    folder, practice journal/chart, pencil (no pens!), water,
                    and a positive mindset.
                </p>
                <p>
                    Daily practice is crucial for a student’s progress. The
                    amount a student is expected to practice will vary according
                    to each student. This will be determined in lessons, and the
                    student will be assigned a certain amount of time to
                    practice each day. A student’s practice will be tracked
                    through practice charts/journals, which should be brought to
                    every lesson.
                </p>
                <p>
                    <b>Practice</b> includes doing vocal exercises worked on
                    during lessons, sight-singing, and working on repertoire.
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
                    least one song at the recital. These performances allow the
                    student to showcase their hard work and talent for loved
                    ones and is good practice for performing outside of the
                    studio
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
            <Section style={{ padding: "70px" }}>
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
            </Section>
        </Page>
    )
}
