import SignInPage from "@/components/pages/signin";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense>
            <SignInPage />
        </Suspense>
    )
}