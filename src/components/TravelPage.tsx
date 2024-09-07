'use client'

import { div } from "framer-motion/client";
import { AnimatedModal } from "@/components/AnimatedModal"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";

const budgetData = [
    {
        emoji: "💵",
        title: "Cheap",
        description: "A budget friendly trip (0-1000$)",
    },
    {
        emoji: "💰",
        title: "Moderate",
        description: "Keep it balanced (1000-5000$)",
    },
    {
        emoji: "💸",
        title: "Expensive",
        description: "Go all out (5000$ and above)",
    },
];

const personsData = [
    {
        emoji: "🧍",
        title: "Just Me",
        description: "A solo travel",
    },
    {
        emoji: "🥂",
        title: "Couple",
        description: "A travel for two",
    },
    {
        emoji: "🏡",
        title: "Family",
        description: "A group of fun loving adventures",
    },
    {
        emoji: "🚣",
        title: "Friends",
        description: "A bunch of thrill seekers",
    },
];

function TravelPage() {
  return (

    <main className="dark:bg-[#181a1b] flex flex-col mx-auto ">

        <TracingBeam>

        <div className="mt-24 mb-16 flex flex-col items-center">
            <h2 className="font-bold text-4xl py-4">Tell us your travel preferences🏖️🌴</h2>
            <p className="text-gray-500">Provide us with basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>
        </div>

        <div className="mb-8">
            <h3 className="text-2xl py-2">What is your destination of choice?</h3>
            <input type="text" className="p-3 w-full rounded bg-gray-300 text-black z-10 placeholder-black/[0.7]" placeholder="Enter your destination"/>
        </div>

        <div className="mb-8">
            <h3 className="text-2xl py-2">How many days are you planning for your trip?</h3>
            <input type="number" className="p-3 bg-gray-300 text-black w-full rounded z-10 placeholder-black/[0.7]" placeholder="Enter number of days"/>
        </div>

        <div>
            <h3 className="text-2xl mt-4 pt-2">Choose your budget</h3>
            <div>
                <HoverEffect items={budgetData} />
            </div>
        </div>

        <div>
            <h3 className="text-2xl">How many people are travelling?</h3>
            <div>
            <HoverEffect items={personsData}/>
            </div>
        </div>

        </TracingBeam>

        <div>
            <AnimatedModal />
        </div>

    </main>
  )
}

export default TravelPage