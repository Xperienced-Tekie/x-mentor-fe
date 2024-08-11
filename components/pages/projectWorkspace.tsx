"use client";

import Image from "next/image";
import { JoinProjectButton, PremiumButton } from "../design-system/Button";
import { useRef, useState, useEffect } from "react";

interface ProjectWorkSpaceProps {
    mpId: string;
}

export default function ProjectWorkSpace({ mpId }: ProjectWorkSpaceProps) {
    const snapshotRef = useRef<HTMLDivElement>(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const enterFullScreen = () => {
        if (snapshotRef.current) {
            if (snapshotRef.current.requestFullscreen) {
                snapshotRef.current.requestFullscreen();
            }
        }
    };

    const handleFullScreenChange = () => {
        if (document.fullscreenElement === snapshotRef.current) {
            setIsFullScreen(true);
        } else {
            setIsFullScreen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("fullscreenchange", handleFullScreenChange);
        document.addEventListener("webkitfullscreenchange", handleFullScreenChange); // Safari
        document.addEventListener("mozfullscreenchange", handleFullScreenChange); // Firefox
        document.addEventListener("MSFullscreenChange", handleFullScreenChange); // IE/Edge

        return () => {
            document.removeEventListener("fullscreenchange", handleFullScreenChange);
            document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
            document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
            document.removeEventListener("MSFullscreenChange", handleFullScreenChange);
        };
    }, []);

    return (
        <div className="mt-10">
            <div className="flex justify-end">
                <PremiumButton name="Get Live Feedback" />
            </div>

            <h3 className="font-semibold text-[24px] text-[#030910] dark:text-white mt-5">Here is what you should do today!</h3>

            {/* Snapshot Container */}
            <div ref={snapshotRef} className="relative mt-10 w-full max-w-full">
                <Image
                    src={"/assets/images/dailysnapshot.svg"}
                    alt="daily_snapshot"
                    width={1000}
                    height={600}
                    className="rounded-2xl w-full h-full"
                />
                {!isFullScreen && (
                    <div
                        className="absolute bottom-4 right-4 cursor-pointer"
                        onClick={enterFullScreen}
                    >
                        <Image
                            src={"/assets/icons/full_screen.svg"}
                            alt="full_screen_icon"
                            width={40}
                            height={40}
                        />
                    </div>
                )}
            </div>
            <div className="grid grid-cols-12 gap-7 mt-5">
                <div className="col-span-4">
                    <JoinProjectButton name="Get Code Review" />
                </div>
                <div className="col-span-4 flex items-center justify-center">
                    <PremiumButton name="Get Figma File" />
                </div>
                <div className="col-span-4">
                    <JoinProjectButton name="Mark as Completed" />
                </div>
            </div>
        </div>
    )
}
