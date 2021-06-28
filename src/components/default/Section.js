import React from "react"
import { Helmet } from "react-helmet"
export function Section({ children, id, spacers = true, style }) {
    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: `${spacers ? "var(--space)" : ""} 0`,
                ...style,
            }}
        >
            <Helmet>
                <style type="text/css">
                    {`
          @media only screen and (max-width: 600px) {
            :root{
              --space: 20px;
            }
          }
          `}
                </style>
            </Helmet>
            <div id={id} style={{ paddingTop: "50px", marginTop: "-50px" }}>
                {children}
            </div>
        </div>
    )
}
