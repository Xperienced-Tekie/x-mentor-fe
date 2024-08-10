import Image from "next/image";

export function GitHubButton() {
    return (
        <button className="flex justify-center items-center gap-3 w-full bg-black dark:bg-[#1B4B7C] rounded-lg p-4">
            <Image
                src={"/assets/icons/Github.svg"}
                alt="github_icon"
                width={20}
                height={20}
            />
            GitHub
        </button>
    )
}

export function PremiumButton() {
    return (
        <button className="flex justify-center items-center gap-3 gradient-bg rounded-full px-10 py-3 text-white">
            <Image
                src={"/assets/icons/workspace_premium.svg"}
                alt="workspace_premium_icon"
                width={20}
                height={20}
            />
            Premium
        </button>
    )
}

export function CodeDemonButton() {
    return (
        <button className="bg-[#0E1018] dark:bg-[#1B1F2E] rounded-full p-3">
            <Image
                src={"/assets/icons/robot.svg"}
                alt="codedemon_icon"
                width={20}
                height={20}
            />
        </button>
    )
}

export function NotificationButton() {
    return (
        <button className="bg-[#0E1018] dark:bg-[#1B1F2E] rounded-full p-3">
            <Image
                src={"/assets/icons/notifications.svg"}
                alt="notifications_icon"
                width={20}
                height={20}
            />
        </button>
    )
}