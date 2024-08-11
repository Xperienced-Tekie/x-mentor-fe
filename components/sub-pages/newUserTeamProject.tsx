import ProjectCard from "../design-system/ProjectCard";

export default function NewTeamProjectPage() {
    return (
        <div className="mt-12">
            <h2 className="text-[36px] text-[#030910] dark:text-white font-bold">
                Join a Team Project
            </h2>
            <div className="mt-10 grid grid-cols-12">
                <div className="col-span-4 py-6 pr-6">
                    <ProjectCard />
                </div>
                <div className="col-span-4 py-6 pr-6">
                    <ProjectCard />
                </div>
                <div className="col-span-4 py-6 pr-6">
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}