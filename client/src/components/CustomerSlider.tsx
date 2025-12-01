import logo1 from "@assets/SP-logo.png";
import logo2 from "@assets/CF-logo.webp";
import logo3 from "@assets/NP-logo.png";
import logo4 from "@assets/JLR-logo.png";
import logo5 from "@assets/DWP-logo.png";
import logo6 from "@assets/WCC-logo.png";
import logo7 from "@assets/BNP-logo.png";
import logo8 from "@assets/GPA-logo.png";

const LOGOS = [
    { id: 1, name: "ScottishParliament", img: logo1 },
    { id: 2, name: "CityFootball", img: logo2 },
    { id: 3, name: "NorthumbriaPolice", img: logo3 },
    { id: 4, name: "JaguarLandRover", img: logo4 },
    { id: 5, name: "DepartWorkPensions", img: logo5 },
    { id: 6, name: "WarwickshireCountyCouncil", img: logo6 },
    { id: 7, name: "BNPParibas", img: logo7 },
    { id: 8, name: "GovPropertyAgency", img: logo8 },
    // Duplicate for infinite scroll effect
    { id: 9, name: "ScottishParliament", img: logo1 },
    { id: 10, name: "CityFootball", img: logo2 },
    { id: 11, name: "NorthumbriaPolice", img: logo3 },
    { id: 12, name: "JaguarLandRover", img: logo4 },
    { id: 13, name: "DepartWorkPensions", img: logo5 },
    { id: 14, name: "WarwickshireCountyCouncil", img: logo6 },
    { id: 15, name: "BNPParibas", img: logo7 },
    { id: 16, name: "GovPropertyAgency", img: logo8 },
];

export default function CustomerSlider() {
    return (
        <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden relative z-20">
            <div className="container mx-auto px-4 mb-6">
                <p className="text-center text-sm font-mono text-muted-foreground uppercase tracking-widest">
                    Trusted by Global Enterprises & Government Agencies
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

                {/* Marquee Track */}
                <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
                    {/* First Set */}
                    <div className="flex gap-12 md:gap-24 px-6 md:px-12 items-center">
                        {LOGOS.map((logo) => (
                            <div
                                key={`a-${logo.id}`}
                                className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
                            >
                                <img
                                    src={logo.img}
                                    alt={logo.name}
                                    className="max-w-full max-h-full object-contain drop-shadow-[0_0_10px_rgba(245,156,0,0.3)]"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second Set (Duplicate for seamless loop) */}
                    <div className="flex gap-12 md:gap-24 px-6 md:px-12 items-center">
                        {LOGOS.map((logo) => (
                            <div
                                key={`b-${logo.id}`}
                                className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
                            >
                                <img
                                    src={logo.img}
                                    alt={logo.name}
                                    className="max-w-full max-h-full object-contain drop-shadow-[0_0_10px_rgba(245,156,0,0.3)]"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Third Set (Triple duplicate for very wide screens) */}
                    <div className="flex gap-12 md:gap-24 px-6 md:px-12 items-center">
                        {LOGOS.map((logo) => (
                            <div
                                key={`c-${logo.id}`}
                                className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
                            >
                                <img
                                    src={logo.img}
                                    alt={logo.name}
                                    className="max-w-full max-h-full object-contain drop-shadow-[0_0_10px_rgba(245,156,0,0.3)]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
