"use client";

import { ChallengesButton } from "../design-system/Button";
import Tags from "../design-system/Tags";
import ResizableCodeEditor from "./codeEditor";

export default function HTMLChallenge() {
    return (
        <div className="mt-12">
            <div className="flex items-center gap-5">
                <h2 className="text-[36px] text-[#030910] dark:text-white font-bold">
                    HTML & CSS Challenge
                </h2>
                <ChallengesButton name="Level 5" />
                <Tags tagNum="100" />
            </div>
            <div className="mt-5">
                <h4 className="text-[24px] font-semibold text-[#030910] dark:text-white">Level 5 Challenge:</h4>
                <p className="text-[20px] mt-4 text-[#030910] dark:text-white">Create a functional navbar that is transparent and blur in background.</p>
            </div>
            <div className="mt-5">
                <ResizableCodeEditor />
            </div>
        </div>
    )
}