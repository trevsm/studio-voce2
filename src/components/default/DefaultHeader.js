import React from "react"

export function DefaultHeader({ title, subtitle }) {
    return (
        <div
            className="text-center"
            style={{ maxWidth: "700px", margin: "0 auto" }}
        >
            <h1 style={{ fontSize: "35px" }}>{title}</h1>
            <h2
                style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    paddingBottom: "20px",
                    lineHeight: "40px",
                }}
            >
                {subtitle}
            </h2>
        </div>
    )
}

