"use client"
import { useEffect } from "react"
import { TextGenerateEffect } from "./TextGenerateEffect"
import { Button } from "./ui/moving-border"

const TextGenerationText = () => {

    useEffect(() => {
        const interval = setInterval(() => {
        }, 100)
        return () => clearInterval(interval)
    }, [])


    const words = `I’m Akib Ali, a Software Engineer with 3 years of experience specializing in building scalable, performance-driven web applications. While my primary focus is creating seamless user interfaces with React.js and Next.js, my expertise in the MERN stack (MongoDB, Express, Node.js) allows me to architect end-to-end solutions.

I focus on writing clean, maintainable code and optimizing front-end performance for a superior user experience. I understand the intricacies of API integration and backend logic, which helps me bridge the gap between complex data and intuitive UI.

Let’s build something technically robust and highly scalable! 🚀`;

    return (

        <>

            {/* <TextGenerateEffect words={words} speed={20}/>; */}

            <div className="px-6 md:px-12 py-8">
                <TextGenerateEffect words={words} speed={20} />

            </div>
        </>
    )


}


export default TextGenerationText