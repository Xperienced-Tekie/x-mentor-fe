import { PremiumButton } from "../design-system/Button";

export default function HumanMentorNoPlan() {
    return (
        <div className="text-[#030910] dark:text-white">
            <h4 className="text-[36px] font-bold">Feeling overwhelmed? Or do you need more help or guidance?</h4>
            <p className="font-semibold text-[24px] mb-10 mt-3">
                Then, it is time to connect with a Human Mentor.
            </p>
            <p className="text-[24px] font-semibold">
                With a Human Mentor by your side, you will get a personalized experience of X-Mentor, tailored and led by your mentor, plus all the extra premium features you want.
            </p>
            <div className="mt-10 flex items-center justify-center">
                <PremiumButton name="Upgrade your plan" />
            </div>
        </div>
    )
}