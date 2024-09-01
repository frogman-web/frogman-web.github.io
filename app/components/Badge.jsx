import Image from "next/image";

const Badge = ({containerStyles}) => {
  return (
    <div className={`relative ${containerStyles}`}>
        <Image src="/assets/frogman-sin-fondo-blanco.png" fill alt="" clasname="object-contain" />
    </div>
  )
}

export default Badge