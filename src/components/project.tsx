import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projectData = [
    {
        image: "https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?fm=jpg&q=60&w=3000",
        title: "Project One",
        description: "This is a short description of project one.",
        link: "#",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1661573047005-36f3c40bec8f?fm=jpg&q=60&w=3000",
        title: "Project Two",
        description: "This is a short description of project two.",
        link: "#",
    },
    {
        image: "https://static.vecteezy.com/system/resources/previews/008/570/720/large_2x/business-people-meeting-using-laptop-computer-calculator-notebook-stock-market-chart-paper-for-analysis-plans-to-improve-quality-next-month-conference-discussion-corporate-concept-free-photo.jpg",
        title: "Project Three",
        description: "This is a short description of project three.",
        link: "#",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?fm=jpg&q=60&w=3000",
        title: "Project One",
        description: "This is a short description of project one.",
        link: "#",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1661573047005-36f3c40bec8f?fm=jpg&q=60&w=3000",
        title: "Project Two",
        description: "This is a short description of project two.",
        link: "#",
    },
    {
        image: "https://static.vecteezy.com/system/resources/previews/008/570/720/large_2x/business-people-meeting-using-laptop-computer-calculator-notebook-stock-market-chart-paper-for-analysis-plans-to-improve-quality-next-month-conference-discussion-corporate-concept-free-photo.jpg",
        title: "Project Three",
        description: "This is a short description of project three.",
        link: "#",
    },
];

export default function Projects() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <section className="py-12 bg-gray-50">


            <div className="text-center mb-12">
                <div className="text-center mb-16" data-aos="zoom-in-down">
                    <h1
                        className="flex items-center justify-center gap-3 text-4xl font-extrabold mb-6
      bg-clip-text text-transparent 
      bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F]"
                    >
                        My Latest Projects
                    </h1>
                    <h3 className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Building <span className="text-[#2D4E9D] font-semibold">efficient, scalable</span> applications with
                        <span className="text-[#4F6FB3] font-semibold"> modern web technologies</span> and
                        <span className="text-[#8CC63F] font-semibold"> clean, maintainable code</span>.
                        Each project showcases a focus on <span className="font-semibold">performance, functionality, and problem-solving</span>.
                    </h3>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-48">
                {projectData.map((project, index) => (
                    <Card
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="flex flex-col p-0 overflow-hidden"
                    >
                        <CardHeader className="p-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-48 w-full object-cover"
                            />
                        </CardHeader>

                        <CardContent className="flex p-5 flex-col flex-1">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

                            <CardFooter className="mt-auto p-0">
                                <Button
                                    asChild
                                    className="w-full bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F]
        text-white font-semibold transition duration-300
        hover:scale-105 hover:shadow-[0_0_20px_rgba(79,111,179,0.6)] hover:animate-pulse"
                                >
                                    <a href={project.link}>View</a>
                                </Button>
                            </CardFooter>
                        </CardContent>
                    </Card>

                ))}
            </div>
        </section>
    );
}


