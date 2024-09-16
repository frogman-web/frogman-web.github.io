"use client";
import Separator from "./Separator";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-screen relative text-white">
        <div className="bg-hero_overlay opacity-45 absolute w-full h-full z-10 bg-primary/[0.01]"></div>
        <video 
            autoPlay 
            loop 
            muted 
            className="absolute top-0 left-0 w-full h-full object-cover"
        >
            <source src="/assets/hero/video.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
        </video>
        <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
            <div data-scroll data-scroll-speed="0.4" className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full">
                <div className="flex flex-col items-center pt-16 md:pt-9">
                    <Badge containerStyles="hidden xl:flex xl:w-[180px] xl:h-[140px]" />
                    <h1 className="h1 text-6xl text-white">
                        <span className="text-white">SERVICIOS DE BUCEO PROFESIONAL</span> Y ROBÓTICA SUBMARINA
                    </h1>
                </div>                
                <Separator />
                <p className="lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">En Frogman, nos especializamos en ofrecer una amplia gama de servicios submarinos. Nuestra experiencia y compromiso con la seguridad nos distinguen, respaldados por protocolos rigurosos y equipos de última generación. Desde buceo profesional hasta robótica submarina avanzada, estamos equipados para superar tus expectativas y garantizar resultados excepcionales. </p>
                <button className="btn"><a href="#contacto">Escríbenos</a></button>
            </div>
        </div>
    </section>
  )
}

export default Hero;