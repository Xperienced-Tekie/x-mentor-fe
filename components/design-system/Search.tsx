import Image from "next/image";

export function SearchBar() {
    return (
        <form action="#">
            <div className="flex items-center justify-center gap-2 bg-[#0E1018] dark:bg-[#1B1F2E] rounded-full p-3">
                <Image 
                    src={"/assets/icons/search.svg"}
                    alt="search_icon"
                    width={20}
                    height={20}
                />
                <input type="text" name="search" id="search" placeholder="Search for anything" className="bg-[#0E1018] dark:bg-[#1B1F2E]" />
            </div>

        </form>
    )
}