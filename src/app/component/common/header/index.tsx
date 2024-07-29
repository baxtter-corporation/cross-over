"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "../container/index"
import { useState } from "react";


const Header = () => {

    const [showFlag, setShowFlag] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <span className="flex flex-col text-center bg-white">
            <Container>
                <span className="flex justify-between items-center">
                    <span>
                        <Image src="image/cross_black.svg" width={202} height={68} className="md:w-[202px] md:h-[68px] max-sm:w-[150px] max-lg:w-[150px]" alt="logotipoCrossOver"/>
                    </span>
                    <span className="flex justify-between gap-[2em] text-[16px] font-[500] text-black max-sm:hidden max-lg:hidden">
                        <Link href="#about" className="hover:text-[#1E90CE] h-6">Sobre Nós</Link>
                        <Link href="#service" className="hover:text-[#1E90CE] h-6">Serviços</Link>
                        <Link href="#product" className="hover:text-[#1E90CE] h-6">Produtos</Link>
                        <Link href="#contact" className="hover:text-[#1E90CE] h-6">Contactos</Link>
                    </span>
                    <span className="flex flex-col gap-[.3em] items-center max-sm:hidden max-lg:hidden">
                        <span className="border p-[.2em] rounded-[.3em] cursor-pointer">
                            <button onClick={() => setShowFlag(!showFlag)} className="bg-transparent border-none">Idioma</button>
                        </span>

                        {showFlag ? (
                            <span className="absolute bg-white md:mt-[3em] cursor-pointer md:p-[.5em] z-10 shadow rounded-[.3em] flex flex-col gap-[.1em]">
                                <span className="flex gap-3" onClick={() => setShowFlag(!showFlag)}>
                                    <Image src="image/flagPortugal.svg" width={22} height={22} alt="portugal flag" className="md:w-[22px] md:h-[22px]"/>
                                    <p onClick={() => setShowFlag(!showFlag)}>Português</p>
                                </span>
                                <span className="flex gap-3 " onClick={() => setShowFlag(!showFlag)}>
                                    <Image src="image/flagUK.svg" alt="uk flag" width={22} height={22} className="md:w-[22px] md:h-[22px]"/>
                                    English
                                </span>
                            </span>
                        ) : "" }

                    </span>

                    <span>
                        <span className="hidden max-sm:flex max-lg:flex flex-col gap-[.3em] max-sm:mx-[.5em] cursor-pointer">
                            <button onClick={() => setShowMenu(!showMenu)} className="max-sm:flex max-lg:flex flex-col gap-[.3em]">
                                <span className="h-[2px] w-[30px] bg-black"></span>
                                <span className="h-[2px] w-[30px] bg-black"></span>
                                <span className="h-[2px] w-[30px] bg-black"></span>
                            </button>
                        </span>

                        {showMenu ? (
                            <span>
                                <span className="absolute left-0 justify-between gap-[2em] text-[16px] font-[500] text-black hidden max-sm:flex max-lg:flex flex-col bg-white max-sm:w-full max-sm:mt-[1em] p-[2em] z-10">
                                    <Link href="#about" className="hover:text-[#1E90CE]">Sobre Nós</Link>
                                    <Link href="#service" className="hover:text-[#1E90CE]">Serviços</Link>
                                    <Link href="#product" className="hover:text-[#1E90CE]">Produtos</Link>
                                    <Link href="#contact" className="hover:text-[#1E90CE] cursor-pointer">Contactos</Link>
                                </span>
                            </span>
                        ) : ""}

                    </span>
                </span>
            </Container>
        </span>
    )
}

export default Header;