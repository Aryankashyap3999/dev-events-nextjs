"use client";

import Image from "next/image";

export const ExploreBtn = () => {
    return (
        <button 
            type="button"
            id="explore-btn"
            className="mt-8 mx-auto"
            onClick={() => console.log("Clicked !")}
        >
            <a href="#events">
                Explore Event
                <Image src="/icons/arrow-down.svg" alt="Arrow Down" width={24} height={24} />
            </a>
        </button>
    )
}