import { ReactNode } from "react"

interface CardProps {
    children: ReactNode
}

export default function Card({ children }: CardProps) {
    return (
        <div className="bg-[#0E1018] dark:bg-[#1B1F2E] text-white rounded-2xl w-full">
            {children}
        </div>
    )
}