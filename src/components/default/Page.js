import React from "react"
import { Helmet } from "react-helmet"
import { Header } from "./Header"
import { Footer } from "./Footer"
import "../styles/main.css"

const footerStyling = {
    position: "absolute",
    bottom: "0",
    left: "50%",
    width: "100%",
    minWidth: "1100px",
    transform: "translateX(-50%)",
}

export function Page({ children, className = "" }) {
    return (
        <div
            className={className + " text-dark px-4"}
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                paddingTop: "50px",
                paddingBottom: "calc(5vw + 300px)",
            }}
        >
            <Helmet>
                <style type="text/css">
                    {`
            html, body{
                overflow-x:hidden;
            }
            :root{
              --dblue: rgb(67 90 105);
              --space: 100px;
            }
          `}
                </style>
            </Helmet>
            <Header />
            <div>{children}</div>
            <div style={footerStyling}>
                <Footer />
            </div>
        </div>
    )
}
