import Image from "next/image";
import Card from "../design-system/Card";

export default function HomePage() {
    return (
        <div className="mt-12">
            <h2 className="text-[36px] text-[#030910] dark:text-white font-bold">Overview</h2>
            <div className="flex items-center justify-between gap-7 mt-7">
                <Card>
                    <div className="flex flex-col items-center justify-center p-5">
                        <Image
                            src={"/assets/icons/Vector.svg"}
                            alt="award_icon"
                            width={70}
                            height={70}
                        />
                        <p className="text-[32px] font-bold mt-3">Bronze Level</p>
                    </div>
                    <hr className="text-[#979EB8]" />
                    <div className="mt-3 text-center p-5">
                        <p className="text-[20px]">Total Crypto Rewards</p>
                        <p className="font-bold text-[32px]">450,000</p>
                    </div>
                </Card>
                <Card>
                    <div className="flex flex-col items-center justify-center p-2 my-[3.5rem]">
                        <p className="rounded-full bg-[#6C748F] p-6 font-bold text-[36px]">10</p>
                        <p className="text-[32px] font-bold mt-4">Ongoing Projects</p>
                    </div>
                </Card>
                <Card>
                    <div className="flex flex-col items-center justify-center p-10 my-9">
                        <p >Challenges</p>
                        <p className="text-[32px] font-bold">Level 22</p>
                        <p className="text-[16px] mt-5">Next</p>
                        <Image
                            src={"/assets/icons/next.svg"}
                            alt="go_icon"
                            width={80}
                            height={80}
                        />
                    </div>
                </Card>
            </div>
            <div className="grid grid-cols-10 gap-5 mt-10">
                <div className="col-span-7">
                    <Image
                        src={"/assets/icons/Chart.png"}
                        alt="go_icon"
                        width={600}
                        height={600}
                    />
                </div>
                <div className="col-span-3">
                    <Card>
                        <div className="flex flex-col items-center justify-center p-10">
                            <p>Refferals</p>
                            <p className="text-[32px] font-bold mt-5">11 Refferals</p>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    )
}