import Image from "next/image";

export function ProfileBar2() {
    return (
        <div className="flex items-center justify-center gap-2 text-white rounded-full p-3">
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
                <h3 className="text-[24px] font-semibold">Wakilat Z.</h3>
                <p className="text-[16px]">Team Member</p>
            </div>
        </div>
    )
}