import Image from "next/image";

const Services = () => {
  return (
    <section id="servicios" className="py-8 xl:py-0 xl:h-[70vh] xl:w-screen">
        <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
            <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
                <div className="flex-1 flex flex-col justify-around items-end xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
                    {/* buceo */}
                    <div className="relative flex items-start">
                        <div className="xl:max-w[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                            <div className="mb-6 flex justify-center items-center">
                                <Image 
                                    src="/assets/services/products/ico1.svg"
                                    width={56}
                                    height={56}
                                    alt=""
                                />
                            </div>
                            <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                                Buceo Profesional
                            </h3>
                            <p className="max-w-[400px]">
                                Ofrecemos servicios de buceo profesional con un equipo altamente cualificado y tecnología de última generación. Realizamos inspecciones, mantenimiento, reparaciones y filmaciones subacuáticas, siempre con un compromiso firme con la seguridad y la calidad.
                            </p>
                            <button className="btn mt-3"><a href="/buceo">Ver más</a></button>
                        </div>
                    </div>                    
                </div>
                {/* imagen */}
                <div className="hidden xl:flex justify-center">
                    <div className="relative w-[322px] h-[580px]">
                        <Image 
                            src="/assets/services/frogman.png"
                            fill
                            alt=""
                            className="object-cover"
                            quality={100}
                            priority
                            data-scroll
                            data-scroll-speed="0.1"
                        />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-around xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
                    {/* robótica */}
                    <div className="relative flex items-start">
                        <div className="xl:max-w[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                            <div className="mb-6 flex justify-center items-center">
                                <Image 
                                    src="/assets/services/products/ico2.svg"
                                    width={56}
                                    height={56}
                                    alt=""
                                />
                            </div>
                            <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                                Robótica Submarina
                            </h3>
                            <p className="max-w-[400px]">
                                Utilizamos tecnología de vanguardia en robótica submarina para explorar y trabajar en las profundidades del océano. Nuestros robots sumergibles están diseñados para realizar tareas complejas como inspecciones, mantenimiento y recuperación de objetos, garantizando precisión y eficiencia en cada operación.
                            </p>
                            <button className="btn mt-3"><a href="/robotica">Ver más</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services