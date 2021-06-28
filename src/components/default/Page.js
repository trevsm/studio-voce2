import React from "react"
import { Helmet } from "react-helmet"
import { Header } from "./Header"
import { Footer } from "./Footer"
import "../styles/main.css"

export function Page({ children, className = "" }) {
    return (
        <div
            className={className + " text-dark px-4"}
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                paddingTop: "50px",
                paddingBottom: "calc(5vw + 250px)",
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
            <Footer />
        </div>
    )
}
