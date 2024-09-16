"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const data = [
    {
        imgSrc: "/assets/about/photo-1.jpg",
        title: 'Nuestro Viaje',
        description: 
            "Fundada en 2014 por Sergio y Álvaro Contreras, padre e hijo, con el objetivo de suministrar equipos para faenas submarinas. Aprovecharon la vasta experiencia de Sergio como Buzo Táctico de la Armada de Chile y la de Álvaro como oficial y buzo, para ofrecer soluciones seguras y eficientes en el sector.",
    },
    {
        imgSrc: "/assets/about/photo-2.jpg",
        title: "Nuestra Promesa",
        description:
            "Nos comprometemos a ofrecer servicios submarinos y equipos de la más alta calidad, siempre priorizando la seguridad y la excelencia. Con una sólida experiencia en el sector y alianzas estratégicas con marcas líderes, garantizamos soluciones eficientes y seguras para cada proyecto, asegurando la satisfacción y confianza de nuestros clientes.",
    },
    {
        imgSrc: "/assets/about/photo-3.jpg",
        title: "Nuestro Equipo",
        description:
            "Nuestro equipo se distingue por su alta cualificación y vasta experiencia en operaciones submarinas. Con un profundo compromiso con la seguridad y la excelencia, nuestros profesionales están equipados con las habilidades y conocimientos necesarios para enfrentar los desafíos más complejos bajo el agua. Su dedicación y capacidad para utilizar tecnología de vanguardia garantizan resultados excepcionales en cada proyecto.",
    },
];

const About = () => {
    const scrollableSectionRef = useRef(null);
    const scrollTriggerRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animation = gsap.fromTo(
            scrollableSectionRef.current,
            { translateX: 0 },
            {
                translateX: "-200vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: scrollTriggerRef.current,
                    start: "top top",
                    end: "1800vw top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <section id="nosotros" className="overflow-hidden bg-blue-950">
            <div ref={scrollTriggerRef}>
                <div ref={scrollableSectionRef} className="h-screen w-[300vw] flex relative">
                    {data.map((item, index) => {
                        return ( 
                            <div 
                                key={index}
                                className="w-screen h-screen flex flex-col justify-center items-center relative"
                            >
                                <div className="container mx-auto">
                                    <div className="flex gap-[30px] relative">
                                        {/* texto */}
                                        <div className="flex-1 flex flex-col justify-center items-center">
                                            <Badge containerStyles="w-[180px] h-[140px]" />
                                            <div className="max-w-[560px] text-center">
                                                {/* título */}
                                                <h2 className="h2 text-white mb-4">
                                                    <span className="mr-4">
                                                        {item.title.split(" ")[0]}
                                                    </span>
                                                    <span className="text-accent">
                                                        {item.title.split(" ")[1]}
                                                    </span>
                                                </h2>
                                                {/* separador */}
                                                <div className="mb-8">
                                                    <Separator />
                                                </div>                                            
                                                {/* descripción */}
                                                <p className="leading-relaxed mb-16 px-8 xl:px-0">
                                                    {item.description}
                                                </p>
                                                {/* btn */}
                                                <button className="btn">
                                                    Ver más
                                                </button>
                                            </div>
                                        </div>
                                        {/* imagen */}
                                        <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                                            <Image
                                                src={item.imgSrc}
                                                fill
                                                className="object-cover"
                                                quality={100}
                                                priority
                                                alt=""
                                            />
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default About