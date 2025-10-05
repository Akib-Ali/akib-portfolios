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


    const words = `I’m Akib Ali, a results-driven Full Stack MERN Developer with 2.5 years of experience in designing and developing high-performance web applications. I specialize in React.js, Node.js, Express, and MongoDB, ensuring seamless user experiences and scalable backend solutions.

With a strong foundation in front-end and back-end development, I focus on writing clean, efficient, and maintainable code. I am passionate about problem-solving, performance optimization, and delivering user-centric digital solutions that drive business success.

Let’s collaborate to build innovative and impactful web solutions! 🚀
`;

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