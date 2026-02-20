import React from 'react';
import Image from 'next/image';

const projects = [
    {
        title: 'Agentic AI',
        description: 'A long set of LLM calls that can perform tasks autonomously using dedicated tools',
        tech: 'Python • OpenAI • Anthropic • LangChain',
        image: '/images/projects/agentic_ai_img.png',
    },
    {
        title: 'Lidar Object Detection',
        description: 'Revamping an old project to use more modern techniques',
        tech: ' Python • C++ • OpenCV • PyTorch • NumPy',
        image: '/images/projects/lidar_project_img.png',
    },
    {
        title: 'LLM Syllabi Evaluator RAG',
        description: 'A RAG system that evaluates syllabi based on a rubric',
        tech: 'Python • Haystack • HuggingFace • ChromaDB • Ollama',
        image: '/images/projects/rag_img.png',
    },
    {
        title: 'Personal Web Portfolio',
        description: 'A modern website to showcase my projects and skills',
        tech: 'React • TailwindCSS • Next.js • Node.js • Framer Motion',
        image: '/images/projects/personal_website_img.png',
    }
];

const Projects = () => {
    return (
        <section className="bg-black py-32 px-6 md:px-12 text-white -scroll-mt-[30vh]" id="projects">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-24 py-4 px-2 leading-tight text-center bg-linear-to-br from-white to-[#a0a0b0] bg-clip-text text-transparent tracking-tight" data-aos="fade-up">
                    Recent Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex flex-col gap-6 cursor-pointer"
                            data-aos="zoom-out"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 rounded-sm">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 text-center bg-black/40 backdrop-blur-[4px]">
                                    <p className="text-lg md:text-xl font-light tracking-wide text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100 italic">
                                        "{project.description}"
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center md:justify-between items-center md:items-start border-t border-white/20 pt-6 text-center md:text-left">
                                <div className="space-y-2 text-center md:text-left">
                                    <h3 className="text-2xl font-bold tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/40 text-xs tracking-widest uppercase font-medium">
                                        {project.tech}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;