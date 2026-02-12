import React from 'react';
import Image from 'next/image';

const projects = [
    {
        title: 'Neon Analytics',
        description: 'A comprehensive data visualization platform with real-time metrics.',
        tech: 'React • D3.js • Node.js',
        image: '/images/projects/dashboard.png',
        year: '2024'
    },
    {
        title: 'Aura Commerce',
        description: 'Next-gen e-commerce mobile experience with glassmorphism UI.',
        tech: 'React Native • Expo • Reanimated',
        image: '/images/projects/mobile-app.png',
        year: '2024'
    },
    {
        title: 'Studio Oslo',
        description: 'Minimalist architectural portfolio showcasing pure design.',
        tech: 'Next.js • TailwindCSS • Framer Motion',
        image: '/images/projects/portfolio.png',
        year: '2023'
    },
    {
        title: 'Cyber Chat',
        description: 'AI-powered communication interface with futuristic aesthetics.',
        tech: 'OpenAI API • WebGL • Three.js',
        image: '/images/projects/ai-interface.png',
        year: '2023'
    }
];

const Projects = () => {
    return (
        <section className="bg-black py-32 px-6 md:px-12 text-white" id="projects">
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
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 text-center bg-black/20 backdrop-blur-[2px]">
                                    <span className="text-xl md:text-2xl font-light tracking-wide text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        {project.tech}
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-between items-start border-t border-white/20 pt-6">
                                <div className="space-y-2 text-center md:text-left">
                                    <h3 className="text-2xl font-bold tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 text-sm max-w-md font-light">
                                        {project.description}
                                    </p>
                                </div>
                                <span className="hidden md:block text-white/40 text-xs font-mono mt-2">
                                    {project.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;