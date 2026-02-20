import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { loadLightInteraction } from "@tsparticles/interaction-light";

const ContactBackground = (props: { id?: string }) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            await loadLightInteraction(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            fpsLimit: 120,
            interactivity: {
                detectsOn: "window" as const,
                events: {
                    onHover: {
                        enable: true,
                        mode: "light" as const,
                    },
                    resize: {
                        enable: true,
                    },
                },
                modes: {
                    light: {
                        area: {
                            gradient: {
                                start: "#3b5e98",
                                stop: "#17163e",
                            },
                            radius: 1000,
                        },
                        shadow: {
                            color: "#17163e",
                        },
                    },
                },
            },
            particles: {
                number: {
                    value: 30,
                    density: {
                        enable: true,
                        area: 800,
                    },
                },
                color: {
                    value: "#ff0000",
                    animation: {
                        enable: true,
                        speed: 20,
                        sync: true,
                    },
                },
                shape: {
                    type: ["circle", "square"],
                },
                opacity: {
                    value: 1,
                },
                size: {
                    value: 30,
                    random: {
                        enable: true,
                        minimumValue: 15,
                    },
                },
                rotate: {
                    value: 0,
                    direction: "clockwise" as const,
                    animation: {
                        speed: 5,
                        enable: true,
                    },
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none" as const,
                    outModes: {
                        default: "out" as const,
                    },
                },
            },
            detectRetina: true,
            background: {
                color: "#17163e",
            },
            fullScreen: {
                enable: false,
            },
            responsive: [
                {
                    maxWidth: 768, // mobile/tablet breakpoint (change if you want)
                    options: {
                        interactivity: {
                            events: {
                                onHover: { enable: false }, // no hover light on mobile
                            },
                        },
                    },
                },
            ],
        }),
        []
    );

    if (init) {
        return (
            <Particles
                id={props.id || "tsparticles-contact"}
                options={options}
                className="absolute inset-0 -z-10"
            />
        );
    }

    return null;
};

export default ContactBackground;
