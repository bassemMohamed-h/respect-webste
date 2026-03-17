"use client"

import { useState } from "react"
import Navbar from "./Navbar"
import NavbarShell from "./NavbarShell"


export function NavbarController(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <NavbarShell onHide={() => setIsOpen(false)}>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
        </NavbarShell>
    )
}