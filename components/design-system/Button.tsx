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