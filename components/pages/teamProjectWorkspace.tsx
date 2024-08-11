"use client";

import Image from "next/image";
import { useState } from "react";

import { MenuIcon } from "../design-system/Icons";
import TeamChat from "../sub-pages/teamChat";

interface TeamProjectWorkSpaceProps {
    tpId: string;
}

export default function TeamProjectWorkSpace({ tpId }: TeamProjectWorkSpaceProps) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="mt-10">
            <div className="flex items-center justify-center">
                <div className="flex-1">
                    <h4 className="text-gradient font-bold text-[36px]">Team Project: Devier</h4>
                </div>
                <div className="flex-2 text-[#030910] dark:text-white">
                    <button onClick={handleToggleMenuOpen}>
                        <MenuIcon />
                    </button> 
                </div>
            </div>

            <div className="mt-10 rounded-3xl">
                {isMenuOpen ? (
                    "Yes menu is open"
                ):(
                    <TeamChat />
                )}
            </div>

        </div>
    )
}
