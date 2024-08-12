import ChallengeWorkspace from "@/components/pages/challengeWorkspace";

interface PageProps {
    params: {
        cId: string;
    },
}

export default function Page({ params }: PageProps) {
    return (
        <ChallengeWorkspace cId={params.cId} />
    )
}