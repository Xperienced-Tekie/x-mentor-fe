import ProjectCard from "../design-system/ProjectCard";

export default function OldMyProjectPage() {
    return (
        <div className="mt-12">
            <h2 className="text-[36px] text-[#030910] dark:text-white font-bold">
                Ongoing Projects
            </h2>
            <div className="mt-10 grid grid-cols-12">
                <div className="col-span-4 p-6">
                    <ProjectCard />
                </div>
                <div className="col-span-4 p-6">
                    <ProjectCard />
                </div>
                <div className="col-span-4 p-6">
                    <ProjectCard />
                </div>
            </div>

            <h2 className="text-[36px] text-[#030910] dark:text-white font-bold mt-10">
                Completed Projects
            </h2>
            <div className="mt-10 grid grid-cols-12">
                <div className="col-span-4 p-6">
                    <ProjectCard />
                </div>
                <div className="col-span-4 p-6">
                    <ProjectCard />
                </div>
                <div className="col-span-4 p-6">
                    <ProjectCard />
                </div>
            </div>

            <h2 className="text-[36px] text-[#030910] dark:text-white font-bold mt-10">
                Add New Projects
            </h2>
            <div className="mt-10 grid grid-cols-12">
                <div className="col-span-4 p-6">
                    <ProjectCard />
                </div>
                <div className="col-span-4 p-6">
                    <ProjectCard />
                </div>
                <div className="col-span-4 p-6">
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}