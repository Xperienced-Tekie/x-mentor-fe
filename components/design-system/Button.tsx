import Image from "next/image";


interface GitHubButtonParams {
    onclick: () => void;
    disabled?: boolean;
}
export function GitHubButton(params: GitHubButtonParams) {
    return (
        <button className="flex justify-center items-center gap-3 w-full bg-black dark:bg-[#1B4B7C] rounded-lg p-4" 
        onClick={params.onclick}
        disabled={params.disabled}
        >
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

interface PremiumButtonProps {
    name: string
}
export function PremiumButton({ name }: PremiumButtonProps) {
    return (
        <button className="flex justify-center items-center gap-3 gradient-bg rounded-full px-10 py-3 text-white">
            <Image
                src={"/assets/icons/workspace_premium.svg"}
                alt="workspace_premium_icon"
                width={20}
                height={20}
            />
            {name}
        </button>
    )
}

interface CodeDemonProps {
    onclick?: () => void;
}

export function CodeDemonButton({onclick}: CodeDemonProps) {
    return (
        <button className="bg-[#0E1018] dark:bg-[#1B1F2E] rounded-full p-3" onClick={onclick}>
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

interface JoinProjectButtonProps {
    name?: string;
}

export function JoinProjectButton(params: JoinProjectButtonProps) {
    return (
        <button className="w-full bg-[#153A61] p-5 rounded-full text-white">
            {params.name ? (params.name):("Add Project")}
        </button>
    )
}

interface ChallengesButtonProps {
    name?: string;
}

export function ChallengesButton(params: ChallengesButtonProps) {
    return (
        <button className="bg-[#A989B3] px-3 py-1 rounded-full text-white">
            {params.name ? (params.name):("Start")}
        </button>
    )
}