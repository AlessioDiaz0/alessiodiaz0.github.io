import React from 'react'
import Image from 'next/image'
import './skills.css'

const Skills = () => {
    const allIcons = [
        'original-4.svg',
        'original-5.svg',
        'original-6.svg',
        'original-7.svg',
        'original-8.svg',
        'original-9.svg',
        'original-10.svg',
        'original-11.svg',
        'original-12.svg',
        'original-13.svg',
        'original-14.svg',
        'original-15.svg',
        'original-16.svg',
        'original-20.svg',
        'original-21.svg',
        'original-22.svg',
        'original-23.svg',
        'original-24.svg',
        'original-wordmark.svg',
        'original-wordmark-2.svg',
        'original-wordmark-3.svg',
        'original-wordmark-4.svg',
        'original-wordmark-6.svg',
        'original-wordmark-8.svg',
        'original-wordmark-10.svg',
        'original-wordmark-11.svg',
        'original-wordmark-12.svg',
        'original.svg',
        'plain-2.svg',
        'plain-3.svg',
        'plain-4.svg',
        'plain-5.svg',
        'plain-wordmark-2.svg',
        'plain-wordmark-3.svg',
        'plain-wordmark-4.svg',
        'plain-wordmark.svg',
        'plain.svg',
        'aws.jpg',
        'haystack.png',
        'N8n-logo-new.svg',
        'postman.png',
        'zapier.png'
    ]

    // Split icons into 3 rows (approximately equal distribution)
    const iconsPerRow = Math.ceil(allIcons.length / 3)
    const row1 = allIcons.slice(0, iconsPerRow)
    const row2 = allIcons.slice(iconsPerRow, iconsPerRow * 2)
    const row3 = allIcons.slice(iconsPerRow * 2)

    // Duplicate arrays for seamless infinite scroll
    const row1Icons = [...row1, ...row1, ...row1]
    const row2Icons = [...row2, ...row2, ...row2]
    const row3Icons = [...row3, ...row3, ...row3]

    return (
        <section className="skills-section">
            <div className="skills-container">
                <h2 className="skills-title">Technical Skills</h2>
                <p className="skills-subtitle">Technologies I work with</p>

                <div className="skills-carousel">
                    {/* Row 1 */}
                    <div className="skills-row">
                        <div className="skills-track">
                            {row1Icons.map((icon, index) => (
                                <div key={`row1-${index}`} className="skill-icon-wrapper">
                                    <Image
                                        src={`/images/devicons/${icon}`}
                                        alt={`Skill icon ${icon}`}
                                        width={60}
                                        height={60}
                                        className="skill-icon"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Reverse direction for visual variety */}
                    <div className="skills-row">
                        <div className="skills-track skills-track-reverse">
                            {row2Icons.map((icon, index) => (
                                <div key={`row2-${index}`} className="skill-icon-wrapper">
                                    <Image
                                        src={`/images/devicons/${icon}`}
                                        alt={`Skill icon ${icon}`}
                                        width={60}
                                        height={60}
                                        className="skill-icon"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="skills-row">
                        <div className="skills-track">
                            {row3Icons.map((icon, index) => (
                                <div key={`row3-${index}`} className="skill-icon-wrapper">
                                    <Image
                                        src={`/images/devicons/${icon}`}
                                        alt={`Skill icon ${icon}`}
                                        width={60}
                                        height={60}
                                        className="skill-icon"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills