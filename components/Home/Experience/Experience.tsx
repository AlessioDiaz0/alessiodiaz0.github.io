import React from 'react'
import './experience.css'
import { FaGraduationCap, FaCertificate, FaLightbulb } from 'react-icons/fa'

const Experience = () => {
    const education = [
        {
            date: "2024",
            title: "Bachelor of Computer Science",
            spec: "With a Specialization in Artificial Intelligence",
            org: "University of California, Irvine"
        },
    ];

    const certificates = [
        {
            date: "2025",
            title: "Agentic AI",
            org: "DeepLearning.AI",
            href: "https://learn.deeplearning.ai/certificates/d768d39c-5f10-4657-b4e5-6681d8bad793?usp=sharing"
        },
        {
            date: "2025",
            title: "Retrieval Augmented Generation",
            org: "Coursera / DeepLearning.AI",
            href: "https://www.coursera.org/account/accomplishments/records/LWPGENC08XLN"
        },
    ];

    const softSkills = [
        "Problem Solving",
        "Team Collaboration",
        "Adaptability",
        "Leadership",
        "Creative Thinking"
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <h2 className="experience-title" data-aos="fade-up">Experience & Foundation</h2>

                <div className="panels-wrapper">
                    {/* Left Panel: Soft Skills */}
                    <div className="panel left-panel" data-aos="fade-right">
                        <h3 className="panel-title">
                            <FaLightbulb /> Soft Skills
                        </h3>

                        <div className="skills-grid">
                            {softSkills.map((skill, index) => (
                                <div key={`soft-${index}`} className="soft-skill-card" data-aos="zoom-in" data-aos-delay={index * 50}>
                                    <span className="soft-skill-name">{skill}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-gray-400 italic text-sm leading-relaxed">
                                "I believe that technical excellence is amplified by strong interpersonal skills and a growth mindset. I strive to bridge the gap between complex engineering and human-centered solutions."
                            </p>
                        </div>
                    </div>

                    {/* Right Panel: Education & Certificates */}
                    <div className="panel right-panel" data-aos="fade-left">
                        <h3 className="panel-title">
                            <FaGraduationCap /> Education & Certificates
                        </h3>

                        <div className="timeline">
                            <h4 className="flex items-center gap-2 text-[#00f2fe] font-bold mb-2" data-aos="fade-down">
                                <FaGraduationCap className="text-sm" /> Academics
                            </h4>
                            {education.map((item, index) => (
                                <div key={`edu-${index}`} className="timeline-item" data-aos="fade-down" data-aos-delay={index * 50}>
                                    <div className="item-date">{item.date}</div>
                                    <div className="item-title">{item.title}</div>
                                    <div className="item-spec">{item.spec}</div>
                                    <div className="item-org">{item.org}</div>
                                </div>
                            ))}

                            <h4 className="flex items-center gap-2 text-[#00f2fe] font-bold mt-6 mb-2" data-aos="fade-down">
                                <FaCertificate className="text-sm" /> Recent Certifications
                            </h4>
                            {certificates.map((item, index) => (
                                <div key={`cert-${index}`} className="timeline-item" data-aos="fade-down" data-aos-delay={index * 50}>
                                    <div className="item-date">{item.date}</div>
                                    <div className="item-title">
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="certificate-link"
                                        >
                                            {item.title}
                                        </a>
                                    </div>
                                    <div className="item-org">{item.org}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience