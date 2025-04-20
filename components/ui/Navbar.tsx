"use client";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 hidden md:block lg:block ",
                className
            )}
        >
            <Menu setActive={setActive}>
                <div>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Home"
                    />
                </div>
                <div>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Journey"
                    />
                </div>
                <div>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Projects"
                    ></MenuItem>
                </div>
                <div>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Contact Me"
                    ></MenuItem>
                </div>
            </Menu>
        </div>
    );
}
