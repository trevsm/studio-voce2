import React from "react"
import { Helmet } from "react-helmet"
import { Header } from "./Header"
import { Footer } from "./Footer"
import "../styles/main.css"

export function Page({ children, className = "" }) {
    return (
        <div
            className={className + " text-dark"}
            style={{
                position: "relative",
                width: "100%",
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
                <title>Studio Voce</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-DHR2RRR0YX"></script>
                <script>
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-DHR2RRR0YX');
                `}
                </script>
            </Helmet>
            <Header />
            <div style={{padding:"100px 20px 20px 20px"}}>{children}</div>
            <Footer />
        </div>
    )
}
