import React from 'react'

const Footer = () => {
    return (
        <div className="p-2 flex flex-col md:flex-row md:items-center text-white/70 text-sm">
            {/* Left */}
            <div className="hidden md:flex md:flex-1">
                <a
                    href="https://www.youtube.com/watch?v=iik25wqIuFo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline">
                    Source Code
                </a>
            </div>
            {/* Center (TRUE center of screen) */}
            <div className="md:flex-1 text-center">
                Made By - Alessio Diaz Cama
            </div>
            {/* Right */}
            <div className="md:flex-1 text-center md:text-right mt-2 md:mt-0">
                Copyright 2026. All Rights Reserved
            </div>
        </div>
    );
}

export default Footer