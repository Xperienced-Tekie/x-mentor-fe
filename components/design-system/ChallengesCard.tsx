import Image from "next/image";
import { ChallengesButton, PremiumButton } from "./Button";
import Tags from "./Tags";

interface ChallengesCardProps {
    heading: string;
    firstImageUrl: string;
    secondImageUrl?: string;
    btnName: string;
    premium: boolean;
    tagNum?: string;
}

export default function ChallengesCard(params: ChallengesCardProps) {
    return (
        <div className="rounded-3xl bg-[#030910] dark:bg-[#1B1F2E] text-white p-5 w-full">
            <div className="flex flex-col items-center justify-center">
                <div className="mb-10">
                    <p className="text-[24px] font-semibold">{params.heading}</p>
                </div>
                <div className="flex items-center justify-between gap-10">
                    <div className="flex items-center justify-center gap-8">
                        <Image
                            src={params.firstImageUrl}
                            alt="challenge_icon"
                            width={50}
                            height={50}
                        />
                        {params.secondImageUrl && (
                            <Image
                                src={params.secondImageUrl}
                                alt="challenge_icon"
                                width={50}
                                height={50}
                            />
                        )}
                    </div>
                    {params.tagNum && (
                        <div className="">
                            <Tags tagNum={params.tagNum} />
                        </div>
                    )}
                    <div className="">
                        {params.premium ? (
                            <PremiumButton name={params.btnName} />
                        ) : (
                            <ChallengesButton name={params.btnName} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}