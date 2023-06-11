import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { Drawer, Stack } from "@mui/material"
import { Link } from "gatsby"

export function Header() {
    const [popup, setPopup] = React.useState(false)

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: "#ffffffe5",
                        color: "inherit",
                        position: "fixed",
                        zIndex: 10,
                    }}
                    elevation={0}
                >
                    <Toolbar
                        sx={{
                            maxWidth: "1200px",
                            width: "100%",
                            margin: "0 auto",
                        }}
                    >
                        <Link
                            to="/"
                            className="navbar-brand"
                            style={{
                                color: "salmon",
                                fontSize: "1.5rem",
                                flexGrow: 1,
                            }}
                        >
                            Studio Voce
                        </Link>
                        <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            px={2}
                            sx={{
                                display: { xs: "none", md: "flex" },
                                a: {
                                    "fontSize": "1.1rem",
                                    "color": "inherit",
                                    "&:hover": {
                                        color: "inherit",
                                    },
                                },
                            }}
                        >
                            <Link to="/#sign-up">Sign Up</Link>
                            <Link to="/#about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/calendar">Calendar</Link>
                            <Link to="/studio-policy">Studio Policy</Link>
                        </Stack>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setPopup(true)}
                            sx={{
                                display: { xs: "flex", md: "none" },
                                mr: 2,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer anchor={"top"} open={popup} onClose={() => setPopup(false)}>
                <Stack
                    spacing={2}
                    alignItems="center"
                    p={4}
                    sx={{
                        fontSize: "1.2rem",
                        a: {
                            "fontSize": "1.1rem",
                            "color": "inherit",
                            "&:hover": {
                                color: "inherit",
                            },
                        },
                    }}
                >
                    <Link to="/#sign-up">Sign Up</Link>
                    <Link to="/#about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/studio-policy">Studio Policy</Link>
                </Stack>
            </Drawer>
        </>
    )
}
