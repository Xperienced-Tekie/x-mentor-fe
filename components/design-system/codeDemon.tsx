import { useState, useEffect } from "react";
import Image from "next/image";
import { CodeDemonButton } from "./Button";
import { MenuIcon2 } from "./Icons";
import ChatCard from "./chatCard";

export default function CodeDemon() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // Close the sidebar when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const sidebar = document.getElementById("sidebar");
            if (sidebar && !sidebar.contains(event.target as Node)) {
                closeSidebar();
            }
        };

        if (isSidebarOpen) {
            document.addEventListener("click", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isSidebarOpen]);

    return (
        <div className="mt-12 relative flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl">
                <div className="flex items-center justify-between bg-[#030910] dark:bg-[#1B1F2E] p-5 rounded-3xl">
                    <div>
                        <CodeDemonButton />
                    </div>
                    <div className="text-white">
                        <h3 className="text-[24px] font-semibold">X-Mentor AI: Code Demon</h3>
                    </div>
                    <div className="text-white cursor-pointer" onClick={toggleSidebar}>
                        <MenuIcon2 />
                    </div>
                </div>

                {/* Overlay for outside click */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={closeSidebar}
                    />
                )}

                {/* Sidebar */}
                <div
                    id="sidebar"
                    className={`fixed top-0 right-0 h-full w-64 bg-[#1B1F2E] shadow-lg transition-transform duration-300 ease-in-out ${
                        isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } rounded-l-3xl z-50`}
                >
                    <div className="p-5 text-white flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-[20px] font-semibold mb-4 text-gradient">Saved Chats</h3>
                            <ul className="space-y-4">
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 3</a></li>
                                <li><a href="#">Link 4</a></li>
                            </ul>
                        </div>
                        <div className="text-right">
                            <button onClick={closeSidebar} className="text-sm text-red-500">Close</button>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="flex items-center justify-center">
                        <p className="text-white bg-[#0E1018] text-[20px] rounded-full p-3">16th July, 2024</p>
                    </div>
                    <ChatCard />
                    <form action="#" className="mt-10">
                        <div className="flex items-center justify-center bg-[#1B1F2E] gap-3 rounded-full p-4">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Type a message to send..."
                                    className="text-[16px] italic p-1 w-full bg-[#1B1F2E] placeholder:italic"
                                />
                            </div>
                            <div className="flex-2">
                                <button type="submit">
                                    <Image
                                        src={"/assets/icons/send.svg"}
                                        alt="send_icon"
                                        width={25}
                                        height={25}
                                    />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
