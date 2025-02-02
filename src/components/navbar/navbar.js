"use client";

import "./navbar.css";

import Link from "next/link";
import { FaBurger } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="bg-[--navbar-outer-bg]">
            <div className="navbar backdrop-blur-lg m-2 p-2 border-2 rounded-lg border-[--navbar-border] bg-[--navbar-inner-bg] text-[--navbar-text]">
                <Desktop />
                <Mobile onClick={toggleMenu} />
                <MobileMenu isOpen={isOpen} />
            </div>
        </div>
    )
}

function Desktop() {
    return (
        <div className="navbar-desktop space-x-5">
            <div className="main-link">
                <Link href="/">flagbook</Link>
            </div>
            <Link href="/home" className="navbar-link">home</Link>
            <Link href="/ctf" className="navbar-link">ctfs</Link>
            <Link href="/writeups" className="navbar-link">writeups</Link>
            <Link href="/tools" className="navbar-link">tools</Link>
            <Link href="/about" className="navbar-link">about</Link>
        </div>
    )
}

function Mobile({onClick}) {
    return (
        <div className="navbar-mobile">
            <div className="main-link">
                <Link href="/">flagbook</Link>
            </div>
            <div className="navbar-mobile-button" onClick={onClick}>
                <FaBurger />
            </div>
        </div>
    )
}

function MobileMenu({ isOpen }) {
    return (
        <div className={`navbar-mobile-menu ${isOpen ? "open" : ""}`}>
            <Link href="/home" className="navbar-link">home</Link>
            <Link href="/ctf" className="navbar-link">ctfs</Link>
            <Link href="/writeups" className="navbar-link">writeups</Link>
            <Link href="/tools" className="navbar-link">tools</Link>
            <Link href="/about" className="navbar-link">about</Link>
        </div>
    );
}