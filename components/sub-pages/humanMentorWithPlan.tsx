import Image from "next/image";
import ChatCard from "../design-system/chatCard";

export default function HumanMentorWithPlan() {
    return (
        <div className="">
            <h2 className="text-[#030910] dark:text-white text-[36px] font-bold">Human Mentor</h2>
            <div className="rounded-3xl border-4 border-[#030910] dark:border-white mt-10">
                <div className="flex items-center justify-center gap-10 bg-[#030910] text-white dark:bg-[#1B1F2E] p-5 w-full rounded-tr-3xl rounded-tl-3xl">
                    <div className="">
                        <Image
                            src={"/assets/images/profile_pic.png"}
                            alt="mentor_image"
                            height={60}
                            width={60}
                            className="rounded-full"
                        />
                    </div>
                    <div className="">
                        <h3 className="text-[24px] font-semibold">Human Mentor: Wakilat Z.</h3>
                    </div>
                </div>
                <div className="p-10">
                    <div className="flex items-center justify-center">
                        <p className="text-white bg-[#0E1018] text-[20px] rounded-full p-3">16th July, 2024</p>
                    </div>
                    <ChatCard />
                    <form action="#" className="mt-10">
                        <div className="flex items-center justify-center bg-[#1B1F2E] gap-3 rounded-full p-4">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Type a message to send..."
                                    className="text-[16px] italic p-1 w-full bg-[#1B1F2E] placeholder:italic"
                                />
                            </div>
                            <div className="flex-2">
                                <button type="submit">
                                    <Image
                                        src={"/assets/icons/send.svg"}
                                        alt="send_icon"
                                        width={25}
                                        height={25}
                                    />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}