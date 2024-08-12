interface Props {
    tagNum: string;
}

export default function Tags({ tagNum }: Props) {
    return (
        <div className="bg-[#308AAC] px-2 py-1 text-white rounded-full">
            <p>{tagNum} Coins</p>
        </div>
    )
}