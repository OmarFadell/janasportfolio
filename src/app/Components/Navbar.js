'use client';

import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "next/image";
export default function Navbar() {
    return (
        <Box
            sx={{
                width: "100%",
                height: { xs: "70px", md: "110px" },
                backgroundColor: "#111",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // center horizontally
                px: 4,
                position: "sticky",
                top: 0,
                zIndex: 9999,
                // borderBottom: "1px solid #333"
            }}
        >
            <Link href="/" style={{ color: "white", textDecoration: "none", fontSize: 32, fontWeight: "bold", textAlign: "center", marginTop: 5 }}>
                <Image
                src="/resrcs/jaysflix.png"
                alt="Jana Logo"
                width={180}
                height={50}
                style={{
                    objectFit: "contain",
                    height: "50px",          // mobile
                    width: "auto",
                }}
                sizes="(max-width: 768px) 50px, 80px"
                />
            </Link>
        </Box>
    );
}
