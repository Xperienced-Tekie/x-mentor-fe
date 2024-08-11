import TeamProjectWorkSpace from "@/components/pages/teamProjectWorkspace";

interface PageProps {
    params: {
        tpId: string;
    },
}

export default function Page({ params }: PageProps) {
    return (
        <TeamProjectWorkSpace tpId={params.tpId} />
    )
}