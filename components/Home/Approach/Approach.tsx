import React from 'react'
import ApproachCard from './ApproachCard'

const Approach = () => {
    return (
        <div className="pt-16 pb-16 text-white">
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold">
                My Approach <br />
            </h1>

            <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
                <div data-aos="fade-down" data-aos-duration="600">
                    <ApproachCard
                        icon="/images/s1.png"
                        name="UI and UX"
                        description="Fast"
                    />
                </div>
                <div data-aos="fade-down" data-aos-duration="600">
                    <ApproachCard
                        icon="/images/s2.png"
                        name="UI and UX"
                        description="Quick"
                    />
                </div>
                <div data-aos="fade-down" data-aos-duration="600">
                    <ApproachCard
                        icon="/images/s3.png"
                        name="UI and UX"
                        description="Efficient"
                    />
                </div>
                <div data-aos="fade-down" data-aos-duration="600">
                    <ApproachCard
                        icon="/images/s4.png"
                        name="UI and UX"
                        description="Energetic"
                    />
                </div>
            </div>
        </div>
    )
}

export default Approach