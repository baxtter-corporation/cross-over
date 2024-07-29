"use client";
import Container from "../common/container";
import Image from "next/image";

const PartinerAndClients = () => {

    return (
        <span className="flex flex-col w-full gap-[1em] md:my-[1em] items-center max-sm:my-[1em] max-lg:my-[1em]">
            <p className="font-[600] tex-[24px]">Empresas que confiam em nós</p>
            <Container customClass="flex justify-between items-center overflow">
                <Image src="/image/axis_logo.svg" alt="axis communication logotipo" width={10} height={10} className="w-[8em]"/>
            </Container>
        </span>
    )
}
export default PartinerAndClients;