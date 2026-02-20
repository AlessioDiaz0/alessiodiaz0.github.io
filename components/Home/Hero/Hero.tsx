"use client"
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'
import ParticlesComponent from './ParticlesBackground'

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
            <ParticlesComponent />
            <div className="relative z-10 flex flex-col items-center">
                <Image
                    src="/images/Photo.png"
                    alt="heroimage"
                    width={400}
                    height={400}
                    className="w-44 h-44 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-8 border-[#0c0c48aa]"
                    data-aos="fade-up"
                />
                <h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
                    Creating products, <br />
                    tools,
                    <span className="text-cyan-200"> and experiences.</span>
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="200" className="mt-5 text-xl px-2 text-center sm:text-2xl font-medium flex flex-col sm:flex-row items-center">
                    Hi! I am Alessio a passionate
                    <span className="text-cyan-200 font-bold">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Frontend Developer')
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString('LLM Developer')
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString('Computer Vision Researcher')
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString('Agentic AI Developer')
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString('Backend Developer')
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .start();
                            }}
                            options={{
                                loop: true,
                                delay: 30,
                                deleteSpeed: 25,
                                wrapperClassName: "pl-2"
                            }}
                        />
                    </span>
                </h2>
            </div>
            <div className="absolute bottom-10 left-0 right-0 flex justify-center px-4" data-aos="zoom-out" data-aos-delay="600" data-aos-offset="0">
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-center">
                    <span className="block sm:inline">
                        Building globally — Fluent in&nbsp;
                    </span>
                    <span className="block sm:inline">
                        🇮🇹 Italian • 🇺🇸 English • 🇪🇸 Spanish
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Hero