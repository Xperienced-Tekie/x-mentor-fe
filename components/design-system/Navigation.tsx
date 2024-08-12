"use client";

import Image from "next/image";
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CodeDemonButton, NotificationButton, PremiumButton } from "./Button";
import { SearchBar } from "./Search";
import { ProfileBar } from "./ProfileBar";
import { FullModal } from "./FullModal";
import { BugIcon, ChevronBack, CodeChallengesIcon, CommunityIcon, Docker, HumanMentorIcon, ProjectIcon } from "./Icons";
import CodeDemon from "./codeDemon";

export function NavBar() {

    const [isModalOpen, setIsModalOpen] = useState<boolean | null>(null);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(null);
    };
    
    return (
        <>
        <nav className="w-full flex items-center justify-center py-2 px-[4rem] bg-[#FAFAFD] dark:bg-[#030910] border-b-[0.5px] border-[#979EB8]">
            <div className="flex-1">
                <Link href={"/"}>
                    <Image
                        src={"/assets/images/X-Mentor_Logo.svg"}
                        alt="X-Mentor_logo"
                        width={80}
                        height={80}
                    />
                </Link>
            </div>
            <div className="flex items-center justify-center gap-5">
                <div className="">
                    <PremiumButton name="Premium" />
                </div>
                <div className="">
                    <CodeDemonButton onclick={handleOpenModal} />
                </div>
                <div className="">
                    <SearchBar />
                </div>
                <div className="">
                    <ProfileBar />
                </div>
                <div className="">
                    <NotificationButton />
                </div>
            </div>
        </nav>
        <FullModal isOpen={isModalOpen} onClose={handleCloseModal}>
            <CodeDemon />
        </FullModal>
        </>
    )
}

interface ContentProps {
    children: ReactNode;
}

export function Content({ children }: ContentProps) {
    const [isOpen, setIsOpen] = useState(true);
    const [isSpecialState, setIsSpecialState] = useState(false);
    const pathname = usePathname();

    const handleToggleSidebar = () => setIsOpen(!isOpen);
    const handleSpecialState = () => setIsSpecialState(!isSpecialState);

    return (
        <div className="flex items-start">
            {isOpen && (
                <div className="flex-shrink-0 bg-[#FAFAFD] dark:bg-[#030910] border-r-[0.5px] border-[#979EB8] min-h-screen transition-all duration-300 ease-in-out relative">
                    {/* Sidebar Content */}
                    <div className="p-4 space-y-4 text-[20px]">
                        <div className={`flex items-center mb-12 ${isSpecialState ? 'justify-between' : 'justify-start'} gap-10`}>
                            <button
                                onClick={handleToggleSidebar}
                                className={`${isSpecialState ? 'mr-auto' : ''} text-black dark:text-white`}
                            >
                                <Docker />
                            </button>
                            {isSpecialState && (
                                <button
                                    onClick={handleSpecialState}
                                    className="ml-auto text-black dark:text-white"
                                >
                                    <ChevronBack />
                                </button>
                            )}
                        </div>

                        {!isSpecialState ? (
                            <>
                                <Link href="/my-project" className={`${pathname === '/my-project' || pathname === "/my-project/mp" ? 'text-white bg-[#0E1018] rounded-lg dark:text-[#030910] dark:bg-white' : 'text-[#030910] dark:text-white'} flex items-center gap-3 py-2 px-2`} onClick={handleSpecialState}>
                                    <ProjectIcon />
                                    Project
                                </Link>
                                <Link href="/challenges" className={`${pathname === '/challenges' ? 'text-white bg-[#0E1018] rounded-lg dark:text-[#030910] dark:bg-white' : 'text-[#030910] dark:text-white'} flex items-center gap-3 py-2 px-2`}>
                                    <CodeChallengesIcon />
                                    Challenges
                                </Link>
                                <Link href="/human-mentor" className={`${pathname === '/human-mentor' ? 'bg-[#0E1018] rounded-lg dark:text-[#030910] dark:bg-white' : 'text-gradient'} flex text-gradient items-center gap-3 py-2 px-2`}>
                                    <HumanMentorIcon />
                                    Human Mentor
                                </Link>
                                <Link href="/help-debug" className={`${pathname === '/help-debug' ? 'text-white bg-[#0E1018] rounded-lg dark:text-[#030910] dark:bg-white' : 'text-[#030910] dark:text-white'} flex items-center gap-3 py-2 px-2`}>
                                    <BugIcon />
                                    Help Debug
                                </Link>
                                <Link href="/page5" className={`${pathname === '/page5' ? 'text-white bg-[#0E1018] rounded-lg dark:text-[#030910] dark:bg-white' : 'text-[#030910] dark:text-white'} flex items-center gap-3 py-2 px-2`}>
                                    <CommunityIcon />
                                    Community
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/my-project" className={`${pathname === '/my-project' || pathname === "/my-project/mp/[mpId]" ? 'text-white bg-[#0E1018] rounded-lg dark:text-[#030910] dark:bg-white' : 'text-[#030910] dark:text-white'} flex items-center gap-3 py-2 px-2`}>
                                    <ProjectIcon />
                                    My Projects
                                </Link>
                                <Link href="/team-project" className={`${pathname === '/team-project' || pathname === "/team-project/tp" ? 'text-white bg-[#0E1018] rounded-lg dark:text-[#030910] dark:bg-white' : 'text-[#030910] dark:text-white'} flex items-center gap-3 py-2 px-2`}>
                                    <CommunityIcon />
                                    Team Projects
                                </Link>
                            </>
                        )}

                    </div>
                </div>
            )}
            {!isOpen && (
                <button
                    onClick={handleToggleSidebar}
                    className="p-4 text-black dark:text-white"
                >
                    <Docker />
                </button>
            )}
            <div className={`flex-grow transition-all duration-300 ease-in-out ${isOpen ? 'ml-3' : 'ml-0'}`}>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
