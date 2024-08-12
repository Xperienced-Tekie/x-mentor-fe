import ChallengesCard from "../design-system/ChallengesCard";

export default function ChallengesPage() {
    return (
        <div className="mt-12">
            <h2 className="text-[36px] text-[#030910] dark:text-white font-bold">
                Code Challenges
            </h2>
            <div className="mt-10 grid grid-cols-10 gap-10">
                <div className="col-span-5">
                    <ChallengesCard
                        heading="HTML Code Challenges"
                        firstImageUrl="/assets/icons/html.svg"
                        secondImageUrl="/assets/icons/css.svg"
                        btnName="Start"
                        premium={false}
                        tagNum="100"
                    />
                </div>
                <div className="col-span-5">
                    <ChallengesCard
                        heading="JavaScript Challenges"
                        firstImageUrl="/assets/icons/js.svg"
                        btnName="Unlock"
                        premium={true}
                    />
                </div>
            </div>
            <div className="mt-10 grid grid-cols-10 gap-10">
                <div className="col-span-5">
                    <ChallengesCard
                        heading="React Challenges"
                        firstImageUrl="/assets/icons/react.svg"
                        btnName="Unlock"
                        premium={true}
                    />
                </div>
            </div>
        </div>
    )
}