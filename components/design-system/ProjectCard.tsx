import Image from "next/image";
import { JoinProjectButton } from "./Button";

export default function ProjectCard(){
    return (
        <div className="rounded-3xl bg-[#0E1018]">
            <Image
                src={"/assets/images/project_thumbnail.png"}
                alt="project_thumbnail"
                width={400}
                height={400}
                className="w-full rounded-t-3xl"
            />
            <div className="p-5 mt-3">
                <h2 className="text-[32px] text-white text-center dark:text-white font-bold mb-3">Devier</h2>
                <JoinProjectButton />
            </div>
        </div>
    )
}