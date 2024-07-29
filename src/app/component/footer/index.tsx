"use client";

import Image from "next/image";
import Container from "../common/container";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {

    const [send, setSent] = useState("");

    return (
        <Container customClass="md:py-[2em] bg-white flex flex-col gap-[1em] max-lg:p-[.5em] max-sm:mt-[2em] max-lg:mt-[2em]" id="contact">
            <span className="flex max-lg:flex-col max-sm:flex-col max-sm:gap-[.8em] md:flex md:justify-between md:py-[5em] max-lg:gap-[.8em] max-sm:mb-[1em] max-lg:mb-[1em]">
                <span className="md:flex flex gap-[1em] max-md:w-[40%] items-center max-lg:w-full max-sm:w-full">
                    <span>
                        <Image src="image/email.svg" width={0} height={0} alt="email" className="md:w-[4em] max-sm:w-[40px] max-lg:w-[40px]"/>
                    </span>
                    <span>
                        <p className="font-[200] text-[#A1A1AA] text-[10pt]">Newsletter</p>
                        <h1 className="text-[#0D0D0D] font-[700] text-[12pt]">Receba conteúdos inéditos e novidades gratuitamente</h1>
                    </span>
                </span>

                <span className="flex items-center gap-[.5em] z-10">
                    <span className="bg-[#F1F8FE] border flex gap-[.5em] px-[.5em] rounded-[8px] max-lg:w-[100%]">
                        <Image src="image/emaillogo.svg" width={0} height={0} alt="email" className="md:w-[1em]"/>
                        <input type="text" placeholder="Digite o seu email" className="border-none md:py-[.5em] outline-none md:px-[.2em] max-lg:py-[.5em] max-lg:px-[.2em] bg-transparent max-lg:w-full"/>
                    </span>
                    <span>
                        <button className="bg-[#1D87C5] text-white p-[.5em] rounded-[8px] hover:bg-[#1d78ac]" onClick={() => setSent("Enviado")}>Enviar</button>
                    </span>
                </span>
            </span>
            <span className="flex items-center justify-center">
                <Image src="image/Gradient_bar.svg" width={0} height={0} alt="email" className="md:w-[100vw] float-left absolute"/>
            </span>
            <span className="flex justify-between flex-row-reverse md:py-[2em]">
                <span className="flex flex-col md:gap-[2em] justify-end items-start">
                    <Image src="image/Cross_black.svg" width={0} height={0} className="md:w-[250px]" alt="instagram"/>
                    <span className="flex gap-[1em]">
                        <Image src="image/Instagram.svg" width={0} height={0} className="sm:w-[30px] w-[30px]" alt="instagram"/>
                        <Image src="image/Facebook.svg" width={0} height={0} className="sm:w-[30px] w-[30px]" alt="facebook"/>
                        <Image src="image/Twitter.svg" width={0} height={0} className="sm:w-[30px] w-[30px]" alt="instagram"/>
                    </span>
                </span>
                <span className="flex gap-[4em]">
                    <span className="text-[10pt] font-[300] md:flex md:flex-col cursor-pointer z-10 max-sm:flex max-lg:flex maxsm:flex-col max-lg:flex-col gap-[.5em]">
                        <Link className="hover:text-[#1E90CE] cursor-pointer" href="about">Sobre nós</Link>
                        <Link className="hover:text-[#1E90CE] cursor-pointer" href="service">Serviços</Link>
                        <Link className="hover:text-[#1E90CE] cursor-pointer" href="product">Produtos</Link>
                        <Link className="hover:text-[#1E90CE] cursor-pointer" href="contact">Contatos</Link>
                    </span>
                </span>
            </span>
            <hr />
            <span className="flex justify-between md:py-[1em] md:text-[5pt] max-sm:py-[.2em] max-sm:flex-col max-lg:flex-col">
                <span>
                    <span className="flex gap-[1em] text-[10pt] font-[300] max-sm:text-center max-lg:text-center max-sm:w-full">
                        <p>&copy; 2024 Cross Over - Todos direitos reservados.</p>
                    </span>
                </span>
            </span>
        </Container>
    )
}   

export default Footer;