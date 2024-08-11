import Image from "next/image";
import ChatCard from "../design-system/chatCard";

export default function TeamChat() {
    return (
        <div className="p-10 bg-red-500 rounded-2xl">
            <div className="flex items-center justify-center">
                <p className="text-white bg-[#0E1018] text-[20px] rounded-full p-3">16th July, 2024</p>
            </div>
            <ChatCard />
            <form action="#" className="mt-10">
                <div className="flex items-center justify-center bg-[#1B1F2E] gap-3 rounded-full p-4">
                    <div className="flex-1">
                        <input type="text" placeholder="Type a message to send..." className="text-[16px] italic p-1 w-full bg-[#1B1F2E] placeholder:italic" />
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
    )
}