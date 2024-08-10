import Image from "next/image";

export function ProfileBar() {
    return (
        <div className="flex items-center justify-center gap-2 text-white bg-[#0E1018] dark:bg-[#1B1F2E] rounded-full p-3">
            <div className="">
                <Image
                    src={"/assets/images/profile_pic.png"}
                    alt="profile_image"
                    width={60}
                    height={60}
                    className="rounded-full"
                />
            </div>
            <div className="text-center">
                <h3 className="text-[24px] font-semibold">Tomiwa Philip</h3>
                <p className="text-[16px]">Frontend Developer</p>
            </div>
        </div>
    )
}