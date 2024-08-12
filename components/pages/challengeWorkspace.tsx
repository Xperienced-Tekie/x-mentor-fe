import HTMLChallenge from "../sub-pages/htmlChallenge";
import JSChallenge from "../sub-pages/jsChallenge";
import ReactChallenge from "../sub-pages/reactChallenge";

interface Props {
    cId: string;
}

// Define the type for the challenge variable
type ChallengeType = 'html' | 'js';

export default function ChallengeWorkspace({ cId }: Props): JSX.Element | null {
    // Explicitly set the challenge variable type
    const challenge: ChallengeType = "js";

    switch (challenge) {
        case 'html':
            return <HTMLChallenge />;
        case 'js':
            return <JSChallenge />;
        default:
            return null;
    }
}
