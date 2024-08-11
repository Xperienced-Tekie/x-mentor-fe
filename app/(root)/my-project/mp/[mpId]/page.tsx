import ProjectWorkSpace from "@/components/pages/myProjectWorkspace";

interface PageProps {
    params: {
        mpId: string;
    },
}

export default function Page({ params }: PageProps) {
    return (
        <ProjectWorkSpace mpId={params.mpId} />
    )
}