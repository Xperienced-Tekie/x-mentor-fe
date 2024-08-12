import { useState } from "react";
import { ProfileBar2 } from "../design-system/ProfileBar2";

export default function TeamDetails() {
    // State to track the current active tab
    const [activeTab, setActiveTab] = useState("Project Management");

    // Function to render content based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case "Project Management":
                return (
                    <div className="grid grid-cols-12 text-white">
                        <div className="col-span-3">
                            <div className="flex flex-col items-start border-r-[0.3px] border-white">
                                <div className="bg-[#030910] dark:bg-[#1B1F2E] text-center w-full py-4">
                                    Team Details
                                </div>
                                <div className="p-3">
                                    This is the content for Team Details
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex flex-col items-start border-r-[0.3px] border-white">
                                <div className="bg-[#030910] dark:bg-[#1B1F2E] text-center w-full py-4">
                                    Progress
                                </div>
                                <div className="p-3">
                                    This is the content for Progress
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex flex-col items-start border-r-[0.3px] border-white">
                                <div className="bg-[#030910] dark:bg-[#1B1F2E] text-center w-full py-4">
                                    Assignee
                                </div>
                                <div className="p-3">
                                    This is the content for Assignee
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 rounded-tr-2xl rounded-br-2xl">
                            <div className="flex flex-col items-start">
                                <div className="bg-[#030910] dark:bg-[#1B1F2E] text-center w-full py-4">
                                    Moderator
                                </div>
                                <div className="p-3">
                                    This is the content for Moderator
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "Team Members":
                return (
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="flex flex-col items-start text-white">
                                <div className="bg-[#030910] dark:bg-[#1B1F2E] text-[24px] text-center w-full py-4">
                                    Team Members
                                </div>
                                <div className="p-3">
                                    <ProfileBar2 />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "Collaboration Guidelines":
                return (
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="flex flex-col items-start text-white">
                                <div className="bg-[#030910] dark:bg-[#1B1F2E] text-[24px] text-center w-full py-4">
                                    Collaboration Guidelines
                                </div>
                                <div className="p-3">
                                    <p className="text-[16px]">
                                        Some infor about collaboraion that you want to miss. Some infor about collaboraion that you want to miss. Some infor about collaboraion that you want to miss. Some infor about collaboraion that you want to miss. Some infor about collaboraion that you want to miss .Some infor about collaboraion that you want to miss.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "Project Details":
                return (
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="flex flex-col items-start text-white">
                                <div className="bg-[#030910] dark:bg-[#1B1F2E] text-[24px] text-center w-full py-4">
                                    Project Details
                                </div>
                                <div className="p-3">
                                    <p className="text-[16px]">
                                        Some infor about collaboraion that you want to miss. Some infor about collaboraion that you want to miss. Some infor about collaboraion that you want to miss. Some infor about collaboraion that you want to miss. Some infor about collaboraion that you want to miss .Some infor about collaboraion that you want to miss.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="rounded-2xl bg-[#979EB8]">
            <div className="grid grid-cols-12">
                {/* Sidebar with buttons */}
                <div className="col-span-3 bg-[#030910] dark:bg-[#1B1F2E] rounded-tl-2xl rounded-bl-2xl">
                    <div className="flex flex-col items-start justify-between gap-6 p-10">
                        <button
                            onClick={() => setActiveTab("Project Management")}
                            className="text-[16px] text-[#70D0ED]"
                        >
                            Project Management
                        </button>
                        <button
                            onClick={() => setActiveTab("Team Members")}
                            className="text-[16px] text-[#70D0ED]"
                        >
                            Team Members
                        </button>
                        <button
                            onClick={() => setActiveTab("Collaboration Guidelines")}
                            className="text-[16px] text-[#70D0ED] text-left"
                        >
                            Collaboration Guidelines
                        </button>
                        <button
                            onClick={() => setActiveTab("Project Details")}
                            className="text-[16px] text-[#70D0ED]"
                        >
                            Project Details
                        </button>
                    </div>
                </div>

                {/* Main content area */}
                <div className="col-span-9">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
