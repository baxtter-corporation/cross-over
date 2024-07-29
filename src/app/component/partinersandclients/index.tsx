"use client";
import Container from "../common/container";
import Image from "next/image";

const PartinerAndClients = () => {

    return (
        <span className="flex flex-col w-full gap-[1em] justify-center md:my-[1em] items-center bg-white max-sm:py-[1.5em] max-lg:py[1.5em]">
            <p className="font-[600] tex-[24px]">Parceiro de Confiança</p>
            <Container customClass="flex justify-between items-center overflow">
                <Image src="/image/axis_logo.svg" alt="axis communication logotipo" width={10} height={10} className="w-[8em] max-sm:w-[7em] max-lg:w-[7em]"/>
            </Container>
        </span>
    )
}
export default PartinerAndClients;