import React from "react"
import { Button, Form } from "react-bootstrap"

import { useForm, ValidationError } from "@formspree/react"

export function Input({
    title,
    name,
    type,
    value,
    required = true,
    hidden,
    as,
    rows,
    errors,
    placeholder,
}) {
    return (
        <Form.Group controlId={"control_id_" + name} hidden={hidden}>
            <Form.Label>
                {title + ": "}
                {required ? null : (
                    <span style={{ opacity: ".5" }}>(optional)</span>
                )}
            </Form.Label>
            <Form.Control
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                as={as}
                rows={rows}
                readOnly={value ? true : false}
                required={required}
            />
            <ValidationError prefix={title} field={name} errors={errors} />
        </Form.Group>
    )
}

export function FormX({
    inputs = [],
    reason,
    fsID,
    callback,
    button = "Submit",
    thank_you = "Thank you!",
}) {
    const [state, handleSubmit] = useForm(fsID)

    if (!inputs || !fsID || !reason) return null

    if (state.succeeded) {
        if (callback) callback()
        return (
            <div className="border p-4">
                <p>{thank_you}</p>
            </div>
        )
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                title="Reason"
                name="reason"
                type="text"
                value={reason}
                hidden
            />
            {inputs.map((e, i) => {
                const name = e.title.replace(/\s\s+/g, "_")
                return (
                    <Input
                        key={i}
                        title={e.title}
                        name={name}
                        type={e.type}
                        errors={state.errors}
                        value={e.value}
                        as={e.as}
                        rows={e.rows}
                        placeholder={e.placeholder}
                        required={e.required}
                    />
                )
            })}

            <Button
                variant="dark"
                type="submit"
                disabled={state.submitting}
                style={{ background: "salmon", borderColor: "#ec8579" }}
            >
                {button}
            </Button>
        </Form>
    )
}

export function GeneralContactForm() {
    return (
        <FormX
            inputs={[
                { title: "Full Name", type: "text" },
                { title: "Email Address", type: "text" },
                { title: "Subject", type: "text" },
                { title: "Message", as: "textarea", rows: 3 },
            ]}
            reason="General Contact."
            fsID="mjvjybbn"
        />
    )
}

export function SignUpForm() {
    return (
        <FormX
            inputs={[
                { title: "Full Name", type: "text" },
                { title: "Email Address", type: "text" },
                {
                    title: "Custom Message",
                    as: "textarea",
                    placeholder:
                        "Hey Emily! \nI'm interested in signing up for private lessons.",
                    rows: 3,
                    required: false,
                },
            ]}
            thank_you="Thanks for reaching out! Look out for an email from me in the next few days. We'll be in touch!"
            button="Send Request"
            reason="Interested in registration!"
            fsID="xdoyenon"
        />
    )
}
