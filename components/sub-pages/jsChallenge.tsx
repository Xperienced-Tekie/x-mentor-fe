"use client";

import { ChallengesButton } from "../design-system/Button";
import Tags from "../design-system/Tags";
import ResizableCodeEditor from "./codeEditor";
import JSEditor from "./codeEditorForJs";

export default function HTMLChallenge() {
    return (
        <div className="mt-12">
            <div className="flex items-center gap-5">
                <h2 className="text-[36px] text-[#030910] dark:text-white font-bold">
                    JavaScript Challenge
                </h2>
                <ChallengesButton name="Level 5" />
                <Tags tagNum="100" />
            </div>
            <div className="mt-5">
                <h4 className="text-[24px] font-semibold text-[#030910] dark:text-white">Level 5 Challenge:</h4>
                <p className="text-[20px] mt-4 text-[#030910] dark:text-white">Create a function to loop over an array of integers.</p>
            </div>
            <div className="mt-5">
                <JSEditor />
            </div>
        </div>
    )
}