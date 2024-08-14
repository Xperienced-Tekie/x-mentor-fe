"use client";

import { useRouter } from "next/navigation";
import { GitHubButton } from "../design-system/Button";

export default function SignInPage() {
    const router = useRouter();

    const handleGithubRedirect = () => {
        router.push("https://critical-ardeen-xmentor-3c0812eb.koyeb.app/auth/github")
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-10 min-w-[300px] max-w-[500px] min-h-[200px] flex items-center justify-center border-2 border-[#030910] rounded-2xl p-7 dark:border-[#23283A] dark:bg-[#0E1018]">
                <div className="flex-col items-center justify-center text-center my-[3rem]">
                    <h1 className="text-[36px] text-gradient font-bold mb-10">Sign In to X-Mentor</h1>
                    <p className="text-[24px] text-black font-medium dark:text-white mb-10">Continue to X-Mentor by connecting your GitHub Developer Account</p>
                    <div className="mt-[6rem]">
                        <GitHubButton onclick={handleGithubRedirect} />
                    </div>
                </div>
            </div>
        </div>
    )
}
